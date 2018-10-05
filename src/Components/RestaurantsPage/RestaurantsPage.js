import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import './RestaurantsPage.css';


class RestaurantsPage extends Component {



    render() {
        return (
            <div className='bodyBack'>
                <NavBar />
                <h1 style={{ fontFamily: 'Alegreya Sans SC', fontSize: '50px', letterSpacing: '2px' }}>THE BEST PUERTO RICAN CUISINE</h1>

                <div className='destinBtns'>
                    <div style={{ marginBottom: '100px' }}>
                        <div className='RestBtns1'>
                            <h4>Qlantro</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Calle 25 De Julio, Yauco, 00698, Puerto Rico</h6>
                            <div className='newP2'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >
                                    Our Puertorican cuisine with European influence, flirts with high quality ingredients to give our beginners a unique and unforgettable gastonomic experience at very reasonable prices. </p>

                                <div style={{ margin: 'auto' }}>
                                    <div className='restPic1'></div>
                                </div>

                            </div>
                        </div>

                        <div className='RestBtns2'>
                            <h4>El Paladar</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Yauco Plaza II Shopping Center, Yauco 00698, Puerto Rico</h6>
                            <div className='newP2'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Spanish tavern with Cuban ambience. Valencian paella, churrasco in mushroom sauce, breast in fruit sauce and mofongo stuffed with shrimp. Live music: rock and bohemian. The Paladar restaurant is located in Yauco.</p>

                                <div className='restPic2'></div>

                            </div>
                        </div>

                        <div className='RestBtns3'>
                            <h4>La Carreta</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>129 KM 5.2, Carr 368, Jácana, 00698, Puerto Rico</h6>
                            <div className='newP2'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Caribbean food restaurant, Can Can pork chop, stuffed mofongos, fresh seafood, mojitos, children's menu, family-friendly atmosphere, recreational areas.</p>

                                <div className='restPic3'></div>

                            </div>
                        </div>

                        <div className='RestBtns4'>
                            <h4>La Guardarraya</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>127 Carr. (Old Road From Yauco to Guayanilla), 00656, Puerto Rico</h6>
                            <div className='newP2'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >It all started in 1957, when Don Juan Vera-Martínez, an expert and impassioned gamecock breeder, started the Gallera Loma Bonita, a cockfight arena in the town of Yauco, Puerto Rico. There, he decides to open the restaurant where the famous "Can-Can" pork chops first appeared. The Can-Can pork chop became so famous that it's been copied all around the island, yet no one equals Don Juan's.</p>

                                <div className='restPic4'></div>

                            </div>
                        </div>

                        <div className='RestBtns5'>
                            <h4>Gustito Yaucano</h4>
                        </div>

                        <div style={{ width: '370px', height: 'auto', margin: 'auto' }}>
                            <h5 style={{ marginBottom: '0px' }}>Address</h5>
                            <h6 style={{ marginTop: '0px' }}>Carr 121 Km 13.0 Bo Susua, Yauco, Puerto Rico</h6>
                            <div className='newP2'>
                                <p style={{ textAlign: 'left', margin: '10px' }} >Creole Food Restaurant with a variety of lunches at incredible prices. Try our stuffed breasts. Soon Opening Menu to the Cart.</p>

                                <div className='restPic5'></div>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}

export default RestaurantsPage;