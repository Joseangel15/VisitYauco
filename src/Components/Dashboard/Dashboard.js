import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import Carousel from './Carousel';
import './Dashboard.css';


class Dashboard extends Component {
    constructor(props) {
        super(props)



    }


    render() {


        return (
            <div className='bodyBack'>
                <NavBar />

                <Carousel />

                <div className='btnsAndFacts'>
                    <div className='dashBtns'>
                        <Link to='/Destinations'><button className='dashMenuBtns1'>Destinations</button></Link>
                        <Link to='/History'><button className='dashMenuBtns2'>History & Culture</button></Link>
                        <Link to='/News'><button className='dashMenuBtns3'>News</button></Link>
                        <Link to='/Restaurants'><button className='dashMenuBtns4'>Restaurants</button></Link>
                        <Link to='/Map'><button className='dashMenuBtns5'>Map & Weather</button></Link>
                    </div>

                    <div className='yaucoFacts'>
                        <div>
                            <h1 style={{ marginBottom: '0px', fontSize: '40px' }}>179</h1>
                            <h4 style={{ marginTop: '0px' }}>KM²</h4>
                        </div>
                        <div>
                            <div className='fas fa-sun white' style={{ marginBottom: '0px' }}>

                            </div>
                            <h4 style={{ marginTop: '0px' }}>Weather</h4>
                        </div>
                        <div>
                            <h1 style={{ marginBottom: '0px', fontSize: '40px' }}>1756</h1>
                            <h4 style={{ marginTop: '0px' }}>Founded</h4>
                        </div>
                        <div>
                            <h1 style={{ marginBottom: '0px', fontSize: '40px' }}>42,073</h1>
                            <h4 style={{ marginTop: '0px' }}>Population</h4>
                        </div>
                    </div>
                </div>

                <div className='middleBar'>
                    <h1 className='middleBarText'>Flag and Coat of Arms</h1>
                </div>

                <div className='flagAndShield'>
                    <div style={{height: '215px', width: '325px', border: '1px solid'}}>
                        <div className='yFlag'></div>
                    </div>
                    <div> 
                        <div className='yShield'></div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}



export default Dashboard;