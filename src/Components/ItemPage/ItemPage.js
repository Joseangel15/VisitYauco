import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addToCart} from '../../Ducks/reducer';
import NavBar from '../Nav/NavBar';
import {Link} from 'react-router-dom';
import './ItemPage.css';


class ItemPage extends Component  {
    constructor(props){
        super(props)

        this.state = {

            product: {},
            
        }

        this.handleAddToCart = this.handleAddToCart.bind(this);
    }
    
    componentDidMount () {

        axios.get(`/api/getItem/${this.props.match.params.id}`).then(res => {
            this.setState({
                product: res.data[0],
                
            })
        })
    }
    
    handleAddToCart () {
        axios.post(`/api/addToCart/${this.state.product.id}`)
        .then(res => {
            console.log(res.data)
            console.log(res.data)
            this.props.addToCart(res.data)
            alert('Your item has been added to the cart')
        })
    }

    render() {
        return(
            <div>
                <NavBar/>
                <div>
                    <Link to='/Cart'><button className='cartBtn'></button></Link>
                </div>

                <h1>{this.state.product.item_name}</h1>

                <div>${this.state.product.item_price}</div>

                <div>
                    <div>
                        <img src={this.state.product.item_image} alt="" className='mainItemPic'/>
                    </div>

                    <button onClick={() => {this.handleAddToCart()}}>Add to Cart</button>

                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }
    
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps, {addToCart})(ItemPage);