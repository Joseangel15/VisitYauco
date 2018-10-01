import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import './Dashboard.css';


class Dashboard extends Component {

    
    render() {

        

        return (
            <div className='bodyBack'>
                <NavBar />

                <div className='slideShow' >
                    <div className='cerroBox'>
                        <p className='mainYauco'>Yauco</p>
                    </div>
                    <div className='lakeBox'>
                        <p className='mainYauco'>Yauco</p>
                    </div>
                    <div className='alcalBox'>
                        <p className='mainYauco'>Yauco</p>
                    </div>
                    <div className='seaBox'>
                        <p className='mainYauco'>Yauco</p>
                    </div>
                </div>
                <div className='dashBtns'>
                    <Link to='/Destinations'><button className='dashMenuBtns1'>Destinations</button></Link>
                    <Link to='/History'><button className='dashMenuBtns2'>History & Culture</button></Link>
                    <Link to='/News'><button className='dashMenuBtns3'>News</button></Link>
                    <Link to='/Restaurants'><button className='dashMenuBtns4'>Restaurants</button></Link>
                    <Link to='/Map'><button className='dashMenuBtns5'>Map & Weather</button></Link>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Dashboard;