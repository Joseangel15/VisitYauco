import React, {Component} from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../Nav/NavBar';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './StorePage.css';


class StorePage extends Component  {
    constructor(props){
        super(props)


        this.state = {
            products: []
        }


        
    }

    componentDidMount () {
        axios.get('/api/getItems').then(res => {
            this.setState({
                products: res.data
            })
            console.log(this.state.products)
        })
    }

    render() {

        const items = this.state.products.map(el => {
            return (
                <div key={el.id}>
                    <div className='productBox'>
                        <Link to={`/Item/${el.id}`}><img src={el.item_image} alt="" className='productPic'/></Link>
                        <h5>{el.item_name}</h5>
                        <h5>{el.item_price}</h5>                        
                    </div>
                </div>
            )
        })

        return(
            <div>
                <NavBar/>
                <div>
                    <Link to='/Cart'><button className='cartBtn'></button></Link>
                </div>
                <div className='pageTitle'>
                    <h1>Share your love of paradise</h1>
                </div>

                <div>
                    {items}
                </div>

                <Footer />

            </div>
        )
    }
    
}

export default StorePage;