const stripe = require('stripe')(process.env.SECRET_KEY);

module.exports = {

    getItems: (req, res, next) => {
        const db = req.app.get('db');

        db.get_Items().then(dbResult => {
            res.status(200).send(dbResult);

        }).catch(err => console.log(err))
    },

    getItem: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;


        db.get_Item([id]).then(dbResult => {
            res.status(200).send(dbResult)
        }).catch(err => console.log(err))
    },

    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {id: userid} = req.session.user;

        console.log(req.body.quantity)
        if(req.body.quantity) {
            db.add_to_cart([userid, id, req.body.quantity]).then(cart => {
                return res.send(cart)
            })
        } else {
            db.check_cart_for_product([id, userid]).then(result => {
                let qty = result[0] ? result[0].quantity : 0;
                qty++
                db.add_to_cart([userid, id, qty]).then(cart => res.status(200).send(cart)).catch(err => {
                    res.status(500).send({
                        errorMessage: 'Something went wrong!'
                    })
                    console.log(err)
                })
            })
        }
    },

    getUserCart: (req, res, next) => {
        const {id} = req.session.user;
        req.app.get('db').cart([id])
        .then(cart => res.send(cart))
        .catch(err => console.log(err))
    },

    delete: (req, res, next) => {
        const {id} = req.params;
        const {id: userid} = req.session.user
        let newUser = parseInt(id)
        const db = req.app.get('db')
        db.delete([userid, newUser])
        .then(user => res.status(200).send(user))
        .catch(err => console.log(err))
    },

    deleteAllCart: (req, res, next) => {
        const { id: userid } = req.session.user
        const db = req.app.get('db')
        db.delete_all_cart([userid]).then(user => res.status(200).send(user)).catch(err => console.log(err))
    },

    handlePayment: (req, res, next) => {
        const {amount, token:{id}} = req.body
        stripe.charges.create(
            {
                amount: amount,
                currency: "usd",
                source: id,
                description: "charge from Jose"
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }

        )
    }

}