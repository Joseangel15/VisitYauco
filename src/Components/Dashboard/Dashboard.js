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
                    <h1 className='middleBarText'>FLAG AND COAT OF ARMS</h1>
                </div>

                <div className='flagAndShield'>
                    <div style={{ height: '215px', width: '325px', border: '1px solid', margin: 'auto', marginTop: '20px' }}>
                        <div className='yFlag'></div>
                    </div>

                    <div className='flagBox'>
                        <h1 style={{ fontFamily: 'Alegreya Sans SC', letterSpacing: '2px' }}>FLAG</h1>
                        <p style={{ textAlign: 'left', margin: '20px', fontFamily: 'Alegreya Sans', fontSize: '20px' }}>The flag of Yauco consists of two horizontal stripes of equal width, black the superior and gold the inferior one. To the center the official coat of arms of Yauco. The black section represents coffee, which is the city's most cherished crop. The gold section represents the sugar cane; another important crop that was widely cultivated in the plains of Yauco.</p>

                        <h1 style={{ fontFamily: 'Alegreya Sans SC', letterSpacing: '2px' }}>COAT OF ARMS</h1>

                        <p style={{ textAlign: 'left', margin: '20px', fontFamily: 'Alegreya Sans', fontSize: '20px' }}>Shield divided in quarters by a cross in the center that represents the Christendom. In the first quarter, the shield of the Pacheco family, in honor to its founder and First Lieutenant don Fernando Pacheco. The description of the Pacheco family shield follows: </p>

                        <ul style={{ textAlign: "left", margin: '5px', marginBottom: '20px', fontFamily: 'Alegreya Sans', fontSize: '20px' }}>
                            <li>In a silver field a gold and black boiler, with seven necks and heads of black serpents in each handle, three to the right hand, confronted with four to the left-hand side. Bordered by a checkered band in gold and black.</li>
                            <li>The second and third quarter, in a field of gold, two coffee plant flowers of five leaves of silver and four red. The coffee plant flower and the coffee grains, represent their cultivation in the Yauco municipality.</li>
                            <li>The border of the shield represents the beads of the rosary.</li>
                            <li>The five tower crown, establishes its category of city.</li>
                        </ul>
                    </div>

                </div>

                <div>

                </div>

                <Footer />
            </div>
        )
    }
}



export default Dashboard;