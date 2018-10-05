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
        })
    }

    render() {

        const items = this.state.products.map(el => {
            return (
                <div key={el.id}>
                    <div className='productBox'>
                        <div style={{height: '150px', width: '150px', margin: 'auto', marginTop: '5px'}}>
                            <Link to={`/Item/${el.id}`}><img src={el.item_image} alt="" className='productPic'/></Link>
                        </div>
                        <h4 style={{fontFamily: 'Alegreya Sans'}}>{el.item_name}</h4>
                        <h5>${el.item_price}</h5>                        
                    </div>
                </div>
            )
        })

        return(
            <div className='bodyBack'>
                <NavBar/>
                <div>
                    <Link to='/Cart'><button className='cartBtn'></button></Link>
                </div>
                <div className='pageTitle'>
                    <h1 style={{fontFamily: 'Alegreya Sans SC'}}>A GIFT TO REMEMBER</h1>
                </div>

                <div className='Products'>
                    {items}
                </div>

                <Footer />

            </div>
        )
    }
    
}

export default StorePage;