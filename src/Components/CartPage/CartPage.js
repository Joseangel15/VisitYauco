import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import axios from 'axios';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom'; 
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getUserData } from '../../Ducks/reducer'
import StripeCheckout from 'react-stripe-checkout';
import swal from 'sweetalert2';
import './CartPage.css';


class CartPage extends Component {
    constructor(props) {
        super(props)



        this.handleAmount = this.handleAmount.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this)
        this.handleProductPrice = this.handleProductPrice.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleOnToken = this.handleOnToken.bind(this)
        this.handleTotal = this.handleTotal.bind(this)
    }

    componentDidMount() {
        if (this.props.cart.length === 0) {
            axios.get('/api/cart').then(res => this.props.addToCart(res.data))
                .catch(err => console.log(err))
        }
        axios.get('/api/user/user-data').then(res => {
            this.props.getUserData(res.data)
            console.log(res.data)
        })
    }

    handleDelete(id, user) {
        axios.delete(`/api/cart/${id}/${user}`)
            .then(res => {
                this.props.removeFromCart(res.data)
            }).catch(err => console.log(err))
    }

    handleUpdateQuantity(value, id) {
        axios.put(`/api/addcart/${id}`, {
            quantity: value
        }).then(res => this.props.addToCart(res.data)).catch(err => console.log(err))
    }

    handleProductPrice(price, qty) {
        let num = price * qty;
        let newNum = num.toFixed(2);
        return newNum;
    }


    handleAmount() {
        let num = this.total * 100;

        let newNum = +(num).toFixed(2);
        return newNum;


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
                <img src={user.user_pic} alt="" className='userPic' style={{ borderRadius: '10px' }} />
                <h3>User: {user.user_name}</h3>
            </div>
        )
    }

    handleClose() {

        const toast = swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
          });

        axios.delete('/api/delcart')
            .then(res => { this.props.removeFromCart(res.data) })
            .then(  

              toast({
                type: 'success',
                title: 'Your payment has been processed'
              }))

            .catch(err => console.log(err))
    }

    handleOnToken(token) {
        token.card = void 0;
        axios.post('/api/payment', { token, amount: this.handleAmount() }).then(  this.handleClose )
        .catch(err => {console.log(err)})
    }

    createListItems() {
        return this.props.cart.map(
            (cart) => {
                
                return (
                    <div key={cart.id}>
                        <div className='cartBoxes'>
                            <img src={cart.item_image} alt="" className='cartItemPic' />

                            <div style={{margin: 'auto'}}>
                                <h3 style={{marginBottom: '0px'}}>{cart.item_name}</h3>
                                <h4 style={{marginBottom: '0px', marginTop: '0px'}}>Quantity</h4>

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
                                <h3 style={{marginTop: '5px'}}>Price ${this.handleProductPrice(cart.item_price, cart.quantity)}</h3>
                            </div>
                            <button className='removeBtn' onClick={() => this.handleDelete(cart.id, cart.userid)} style={{height: '30px', width: '75px', margin: 'auto', border: 'none', borderRadius: '5px', backgroundColor: 'rgb'}}>Remove</button>
                        </div>
                    </div>
                )
            }
        )
    }

    render() {
        return (
            <div className='bodyBack'>
                <NavBar />
                <h1 style={{fontFamily: 'Alegreya Sans SC'}}>Cart</h1>
                <div style={{marginBottom: '100px'}}>
                    <div className='userBox'>
                        {this.handleUserInfo()}
                        <h2>Total:${this.handleTotal()}</h2>
                    </div>

                    <div className='muchBoxes'>
                        {this.props.cart == 0 ? <h2 style={{color: 'white'}}>No items in Cart</h2> : this.createListItems()}
                    </div>

                    <div>
                        <StripeCheckout
                            name="VisitYauco"
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrglTr3WvfermEfjoYweYpTvv7CGUfLal9dyj5cj2TPfAkaTEP"
                            token={this.handleOnToken}
                            stripeKey={'pk_test_apNfE55khg4j3QZdEJi4RhhF'}
                            amount={this.handleAmount()}
                             />

                        <Link to='/Store'><button className='backBtn' >Back</button></Link>

                    </div>
                </div>

                <Footer />

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