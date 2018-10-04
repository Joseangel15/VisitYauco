import React, {Component} from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import './RestaurantsPage.css';


class RestaurantsPage extends Component  {



    render() {
        return(
            <div className='bodyBack'>
                <NavBar/>
                <h1 style={{fontFamily: 'Alegreya Sans SC', fontSize: '50px', letterSpacing: '2px'}}>THE BEST PUERTO RICAN CUISINE</h1>

                <div style={{marginBottom: '100px'}}>
                        <div className='RestBtns1'>
                            <h4>Qlantro</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Calle 25 De Julio, Yauco, 00698, Puerto Rico</h6>
                            <div className='newP'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creative cuisine, by chef Roberto Oquendo.</p>

                                

                            </div>
                        </div>

                        <div className='RestBtns2'>
                            <h4>El Paladar</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Yauco Plaza II Shopping Center, Yauco 00698, Puerto Rico</h6>
                            <div className='newP'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creative cuisine, by chef Roberto Oquendo.</p>

                                

                            </div>
                        </div>

                        <div className='RestBtns3'>
                            <h4>La Carreta</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>129 KM 5.2, Carr 368, Jácana, 00698, Puerto Rico</h6>
                            <div className='newP'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creative cuisine, by chef Roberto Oquendo.</p>

                                

                            </div>
                        </div>

                        <div className='RestBtns4'>
                            <h4>La Guardarraya</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>127 Carr. (Old Road From Yauco to Guayanilla), 00656, Puerto Rico</h6>
                            <div className='newP'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creative cuisine, by chef Roberto Oquendo.</p>

                                

                            </div>
                        </div>

                        <div className='RestBtns5'>
                            <h4>Gustito Yaucano</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Carr 121 Km 13.0 Bo Susua, Yauco, Puerto Rico</h6>
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