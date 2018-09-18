const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const express = require('express');

app.use( express.static(`${__dirname}/build`))

app.use(session ({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

massive( CONNECTION_STRING ).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Database Connected')
}).catch(err => console.log(err));

app.use(bodyParser.json());
// app.use(mid.bypassAuthInDevelopment)

app.listen(SERVER_PORT, () => { console.log(`May the ${SERVER_PORT} be with you!`);});