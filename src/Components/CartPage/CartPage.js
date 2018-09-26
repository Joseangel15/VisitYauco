import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import axios from 'axios';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getUserData } from '../../Ducks/reducer'
import StripeCheckout from 'react-stripe-checkout';
import './CartPage.css';


class CartPage extends Component {

    componentDidMount() {
        if (this.props.cart.length === 0) {
            axios.get('/api/cart').then(res => this.props.addToCart(res.data))
                .catch(err => console.log(err))
            axios.get('/api/user/user-data').then(res => {
                this.props.getUserData(res.data)
                console.log(res.data)
            })
        }
    }

    handleDelete(id, user) {
        axios.delete(`/api/cart/${id}/${user}`)
            .then(res => {
                this.props.removeFromCart(res.data)
            }).catch(err => console.log(err))
    }

    handleUpdateQuantity(value, id) {
        axios.post(`/api/addcart/${id}`, {
            quantity: value
        }).then(res => this.props.addToCart(res.data)).catch(err => console.log(err))
    }

    handleProductPrice(price, qty) {
        return price * qty
    }


    handleAmount() {
        return this.total * 100
    }

    handleTotal() {
        let tempTotal = 0;
        tempTotal = this.props.cart.reduce((acc, el) => {
            return acc + (el.item_price * el.quantity)
        }, 0)
        this.total = +(tempTotal).toFixed(2);
        return this.total;
    }

    handleUserInfo() {
        let { user } = this.props
        return (
            <div>
                <img src={user.user_pic} alt="" className='userPic' />
                <h3>{user.user_name}</h3>
            </div>
        )
    }

    handleClose() {
        axios.delete('/api/delcart').then(res => { this.props.removeFromCart(res.data) }).then(alert('Your payment has been processed')).catch(err => console.log(err))
    }

    handleOnToken(token) {
        token.card = void 0;
        axios.post(`/api/payment`, { token, amount: this.handleAmount }).then(res => { console.log(res) })
    }

    createListItems() {
        return this.props.cart.map(
            (cart) => {
                console.log(this.props.cart)
                return (
                    <div key={cart.id}>
                        <div>
                            <img src={cart.item_image} alt="" className='cartItemPic' />
                            <h3>{cart.item_name}</h3>
                            <h1>Price ${this.handleProductPrice(cart.item_price, cart.quantity)}.00</h1>
                            <button onClick={() => this.handleDelete(cart.id, cart.userid)}>Remove</button>
                            <h3>Quantity</h3>

                            <select defaultValue={cart.quantity} name="" id="" onChange={(e) => this.handleUpdateQuantity(e.target.value, cart.product_id)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div>
                <NavBar />
                <h1>Cart</h1>
                <h3>Total:{this.handleTotal()}</h3>
                <div>
                    <div>
                        {this.handleUserInfo()}
                    </div>

                    <div>
                        {this.props.cart === 0 ? <h2>No items in Cart</h2> : this.createListItems()}
                    </div>

                    <div>
                        <StripeCheckout
                            name="VisitYauco"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrglTr3WvfermEfjoYweYpTvv7CGUfLal9dyj5cj2TPfAkaTEP"
                            token={this.handleOnToken}
                            stripeKey={'pk_test_apNfE55khg4j3QZdEJi4RhhF'}
                            amount={this.handleAmount()}
                            closed={this.handleClose} />

                    </div>
                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, { addToCart, removeFromCart, getUserData })(CartPage);