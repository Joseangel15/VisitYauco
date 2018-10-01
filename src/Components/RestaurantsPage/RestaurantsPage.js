import React, {Component} from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import './RestaurantsPage.css';


class RestaurantsPage extends Component  {



    render() {
        return(
            <div>
                <NavBar/>
                <h1>The Best Puerto Rican Cuisine</h1>

                <div >
                        <div className='locatBtns1'>
                            <h4>Qlantro</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Calle 25 De Julio, Yauco, 00698, Puerto Rico</h6>
                            <div className='newP'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creative cuisine, by chef Roberto Oquendo.</p>

                                

                            </div>
                        </div>
                    </div>

                <Footer />
            </div>
        )
    }
    
}

export default RestaurantsPage;