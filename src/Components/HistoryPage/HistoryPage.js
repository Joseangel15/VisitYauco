import React, { Component } from 'react';
import NavBar from '../Nav/NavBar';
import './HistoryPage.css';


class HistoryPage extends Component {


    render() {
        return (
            <div>
                <NavBar />

                <h1>History</h1>

                <div>
                    <div className='muralYauco'>
                        <h4>El Pueblo del Cafe
                            <h>"The Town of Coffee"</h>
                        </h4>
                        <h4>Los Corsos
                            <h6>"The Corsicans"</h6>
                        </h4>
                        <h4>La Capital Taina
                            <h6>"The Taino Capital"</h6>
                        </h4>
                    </div>
                </div>

                <div>
                    <div className='history1'>
                        <div>
                            <div className='agueybana'></div>

                            <div className='deLeon'></div>
                        </div>
                        <div>
                            <h4>Agueybana the brave</h4>
                            <p>
                                The area of Yauco was considered as the capital of "Boriken" (Taíno name of Puerto Rico) and was governed by Agüeybana, the most powerful Taíno "cacique" (chief) in the island. All the other Caciques were subject to and had to obey Agüeybaná, even though they governed their own tribes. Agüeybaná received Juan Ponce de Leon upon his arrival in 1508.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='history2'>
                            <div>
                                <h4>Founding of Yauco</h4>
                                <p style={{width: '200px', margin: '10px'}}>
                                Founded by Fernando Pacheco on February 29, 1756, Yauco was a center for Corsican immigration to Puerto Rico in the 19th century due to its geographical similarity to their homeland. Corsicans have contributed to many areas of life in Yauco, particularly its coffee-producing agriculture. This has contributed to its nicknames of El Pueblo del Café (City of Coffee), and Los Corsos (The Corsicans). It is also known as La Capital Taína (Taíno Capital) after the native peoples of Puerto Rico. </p>
                            </div>
                            <div className='oldYauco' style={{marginTop: '115px', marginLeft: '10px'}}>

                            </div>
                        </div>

                        <div className='oldYauco2'>
                            
                        </div>

                    </div>

                    <div>
                        <h4>The Land of Coffee</h4>

                        <p style={{width: '325px', margin: 'auto'}}>The new settlers dedicated themselves to the cultivation of these crops and within a short period of time some were even able to own and operate their own grocery stores. However, it was with the cultivation of the coffee bean that they would make their fortunes. Cultivation of coffee in Yauco originally began in the Rancheras and Diego Hernández sectors and later extended to the Aguas Blancas, Frailes and Rubias sectors. </p>

                        <div className='yMountain'></div>
                    </div>

                    <div>
                        <h4>Spanish American War</h4>

                            <p style={{width: '325px', margin: 'auto'}}>Yauco was also the place where the first major land battle between Spanish/Puerto Rican and American armed forces was fought in Puerto Rico during the war. On July 26, 1898, Spanish forces and Puerto Rican volunteers, led by Captain Salvador Meca and Lieutenant Colonel Francisco Puig fought against the American forces led by Brigadier General George A. Garretson. The Spanish forces engaged the 6th Massachusetts in a firefight at the Hacienda Desideria, owned by Antonio Mariani, in what became known as the Battle of Yauco of the Puerto Rico Campaign. Puig and his forces suffered 2 officers and 3 soldiers wounded and 2 soldiers dead. The Spanish forces were ordered to retreat.</p>

                        <div className='sAWar1'></div>
                        <div></div>
                    </div>

                    <div>
                        <p>A story of two flags<br></br>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>

                    <div>
                        <p>Modern Yauco<br></br>

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        <div>Image</div>
                        <div>Image</div>
                    </div>
                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }
}


export default HistoryPage;
