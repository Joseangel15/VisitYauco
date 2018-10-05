import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Footer/Footer';
import './HistoryPage.css';


class HistoryPage extends Component {


    render() {
        return (
            <div className='bodyBack'>
                <NavBar />

                <h1 style={{fontFamily: 'Alegreya Sans SC', fontSize: '50px'}}>DISCOVER THE HISTORY OF YAUCO</h1>

                <div>
                    <div className='muralYauco'>
                        <h4 style={{marginRight: '175px', fontFamily: 'Alegreya Sans SC', fontSize: '22px', marginBottom: '15px'}}>Los Corsos
                            <h6 style={{margin: '0px'}}>"The Corsicans"</h6>
                        </h4>
                        <h4 style={{fontFamily: 'Alegreya Sans SC', fontSize: '26px', marginLeft: '150px', marginTop: '10px', marginBottom: '10px'}}>El Pueblo del Cafe
                            <h6 style={{margin: '0px'}}>"The Town of Coffee"</h6>
                        </h4>
                        <h4 style={{marginRight: '175px', fontFamily: 'Alegreya Sans SC', fontSize: '22px', marginTop: '10px'}}>La Capital Taina
                            <h6 style={{margin: '0px'}}>"The Taino Capital"</h6>
                        </h4>
                    </div>
                </div>

                <div>
                    <div className='history1' >
                        <div>
                            <div className='agueybana' style={{ marginTop: '40px' }} ></div>

                            <div className='deLeon'></div>
                        </div>
                        <div>
                            <h2 style={{fontFamily: 'Alegreya Sans SC'}}>AGUEYBANA THE BRAVE</h2>
                            <p className='agueybanaP'>
                                The area of Yauco was considered as the capital of "Boriken" (Taíno name of Puerto Rico) and was governed by Agüeybana, the most powerful Taíno "cacique" (chief) in the island. All the other Caciques were subject to and had to obey Agüeybaná, even though they governed their own tribes. Agüeybaná received Juan Ponce de Leon upon his arrival in 1508.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='history2'>
                            <div className='miniBox'>
                                <div>
                                    <h2 style={{fontFamily: 'Alegreya Sans SC'}}>FOUNDING OF YAUCO</h2>
                                    <p className='yFounding'>
                                        Founded by Fernando Pacheco on February 29, 1756, Yauco was a center for Corsican immigration to Puerto Rico in the 19th century due to its geographical similarity to their homeland. Corsicans have contributed to many areas of life in Yauco, particularly its coffee-producing agriculture. This has contributed to its nicknames of El Pueblo del Café (City of Coffee), and Los Corsos (The Corsicans). It is also known as La Capital Taína (Taíno Capital) after the native peoples of Puerto Rico. </p>
                                </div>
                                <div className='oldYauco'>

                                </div>
                            </div>
                        </div>

                        <div className='oldYauco2'>

                        </div>

                    </div>

                    <div style={{marginTop: '30px'}}>
                        <h2 style={{fontFamily: 'Alegreya Sans SC'}}>THE LAND OF COFFEE</h2>

                        <p className='coffeeP' >The new settlers dedicated themselves to the cultivation of these crops and within a short period of time some were even able to own and operate their own grocery stores. However, it was with the cultivation of the coffee bean that they would make their fortunes. Cultivation of coffee in Yauco originally began in the Rancheras and Diego Hernández sectors and later extended to the Aguas Blancas, Frailes and Rubias sectors. Yauco coffees are a revived specialty origin that, at best, display the qualities that made Jamaica Blue Mountain famous: A deep, vibrant, yet restrained acidity and balanced, gently rich flavor. </p>

                        <div className='yMountain'></div>
                    </div>

                    <div style={{marginTop: '30px'}}>
                        <h2 style={{fontFamily: 'Alegreya Sans SC'}}>SPANISH AMERICAN WAR</h2>

                        <p className='spanishWar' >Yauco was also the place where the first major land battle between Spanish/Puerto Rican and American armed forces was fought in Puerto Rico during the war. On July 26, 1898, Spanish forces and Puerto Rican volunteers, led by Captain Salvador Meca and Lieutenant Colonel Francisco Puig fought against the American forces led by Brigadier General George A. Garretson. The Spanish forces engaged the 6th Massachusetts in a firefight at the Hacienda Desideria, owned by Antonio Mariani, in what became known as the Battle of Yauco of the Puerto Rico Campaign. Puig and his forces suffered 2 officers and 3 soldiers wounded and 2 soldiers dead. The Spanish forces were ordered to retreat.</p>

                        <div style={{ display: 'flex', justifyContent: 'center', heigth: '100%' }}>
                            <div className='sAWar1'></div>
                            <div className='sAWar2'></div>
                        </div>
                    </div>

                    <div>
                        <h2 style={{fontFamily: 'Alegreya Sans SC', marginTop: '30px'}}>MODERN YAUCO</h2>

                        <p className='yModern'>From coffee plantations to beautiful unspoiled coasts; Visitors to this picturesque destination will not only find significant historical sights, architectural wonders, quaint shops and modern plazas, but spectacular nature reserves and forest reserves that are located outside the city. Yauco is a unique city with its own mixture of culture and tradition and is one of the highly recommended destinations in Puerto Rico.</p>

                        <div style={{ display: 'flex', justifyContent: 'center', heigth: '100%', marginBottom: '100px' }}>
                            <div className='iglesiaYauco'></div>
                            <div className='escudo'></div>
                        </div>
                    </div>
                </div>

                <Footer />

            </div>
        )
    }
}


export default HistoryPage;
