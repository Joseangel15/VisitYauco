import React, {Component} from 'react';
import './footer.css';


class Footer extends Component {

    render(){
        return(
            <div className='dashFooter'>
                <h5 style={{marginBottom: '0px'}}>Created by Jose A Ortiz (2018)</h5>
                <h6 style={{marginTop: '0px'}}>Powered by <a href='https://newsapi.org/'>Newsapi.com</a> and <a href="https://openweathermap.org/">Openweathermap.org</a></h6>

            </div>
        )
    }
}

export default Footer;