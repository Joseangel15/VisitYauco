import React, {Component} from 'react';
import NavBar from '../Nav/NavBar';
import './DestinationsPage.css';


class DestinationsPage extends Component  {



    render() {
        return(
            <div className='bodyBack'>
                <NavBar/>
                <h2 className='destinationsTitle'>Plan your next adventure in Yauco</h2>

                <div className='destinBtns'>
                    <button className='locatBtns1'>Lake Luchetti</button>
                    <button className='locatBtns2'>Ballena Beach</button>
                    <button className='locatBtns3'>Volkyland</button>
                    <button className='locatBtns4'>Historic City Center</button>
                    <button className='locatBtns5'>Gilligan's Island</button>
                    <button className='locatBtns6'>Susua State Forest</button>
                    <button className='locatBtns7'>Y2 Yaucromatic</button>
                    <button className='locatBtns8'>Guanica Dry Forest</button>
                    <button className='locatBtns9'>Coffee Festival</button>
                    <button className='locatBtns10'>Yauco Urban Park</button>
                </div>

                <div className='dashFooter'>

                </div>

            </div>
        )
    }
    
}

export default DestinationsPage;

