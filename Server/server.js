require('dotenv').config()
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./controllers')
const mid = require('./middleware');
const nodemailer = require('nodemailer');
const axios = require('axios');
const app = express();

app.use(express.static(`${__dirname}/../build`));

const {

    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    REACT_APP_DOMAIN,
    SESSION_SECRET,
    SERVER_PORT,
    CONNECTION_STRING,
    ADD_PROTOCOL,

} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));

app.use(bodyParser.json())
app.use(mid.bypassAuthInDevelop)

//Auth0 config

app.get('/auth/callback', async (req, res) => {
    let payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.ADD_PROTOCOL}://${req.headers.host}/auth/callback`
    };

    let responseWithToken = await axios.post(`https://${process.env.REACT_APP_DOMAIN}/oauth/token`, payload);

    let userData = await axios.get(`https://${process.env.REACT_APP_DOMAIN}/userinfo?access_token=${responseWithToken.data.access_token}`);

    const db = req.app.get('db');
    let { sub, name, picture, given_name, family_name, email } = userData.data;
    let userExists = await db.find_User([sub]);

    if (userExists[0]) {
        req.session.user = userExists[0];
        res.redirect(`${process.env.FRONTEND_DOMAIN}/#/Store`)
    } else {
        db.create_User([sub, name, picture, given_name, family_name, email]).then(create_User => {
            req.session.user = create_User[0];

        })
        res.redirect(`${process.env.FRONTEND_DOMAIN}/#/Store`)

    }

});

app.get('/api/user/user-data', (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user)
    } else {
        res.status(401).send('Nice try sucka')
    }
})

app.get('/api/logout', (req, res) => {
    
    req.session.destroy()
    res.redirect(`${process.env.FRONTEND_DOMAIN}/#/`)
})

//Node mailer

app.post('/api/message/', (req) => {

    const { name, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        port: 25,
        auth: {
            user: 'joseangelortiz15@gmail.com',
            pass: process.env.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let HelperOptions = {
        from: name + email,
        to: 'joseangelortiz15@gmail.com',
        subject: subject,
        text: message
    }

    transporter.sendMail(HelperOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent')
        console.log(info)
    })

})

//Endpoints

let c = controller;

//Get all items to display in my storePage
app.get('/api/getItems', c.getItems)

//Get the item tp display in the item page
app.get(`/api/getItem/:id`, c.getItem)

//Adding an item to a cart

app.post(`/api/addToCart/:id`, c.addToCart)

app.get('/api/cart', c.getUserCart)

app.put('/api/addcart/:id', c.addToCart)

app.delete('/api/cart/:id/:user', c.delete)

app.delete('/api/delcart', c.deleteAllCart)

app.post(`/api/payment`, c.handlePayment)

app.listen(SERVER_PORT, () => { console.log(`May the ${SERVER_PORT} be with you!`); });