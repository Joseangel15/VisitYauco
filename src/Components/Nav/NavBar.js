import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';
import '../../Assets/baseline-menu-24px.svg';


class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            showNav: false
        }


        this.handleLogin = this.handleLogin.bind(this);
        this.logout = this.logout.bind(this);
    }

    toggleNav() {
        this.setState({
            showNav: !this.state.showNav
        })
    }

    logout() {
        axios.get('/api/logout')
    }

    handleLogin () {

        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        let redirectUri = encodeURIComponent(`http://localhost:4000/auth/callback`);
        
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
    }

    render() {


        const navMenuStyle = {
            width: '0px',
            margin: '15px',
            textDecoration: 'none',
            color: 'white'
        }

        const linkColor = {
            textDecoration: 'none',
            color: 'white'
        }

        return (
            <div>
                <header>
                    <nav>
                        <Link to='/'><h1>YAUCO</h1></Link>
                        <div className='good-burger' onClick={() => this.toggleNav()}>
                            <div className='ingredients'>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='nav-menu'>
                            <Link to='/'><h3 style={linkColor}>Home</h3></Link>
                            <h3 style={linkColor} onClick={this.handleLogin}>Store</h3>
                            <Link to='/Contact'><h3 style={linkColor}>Contact</h3></Link>
                            <h3 style={linkColor} onClick={this.logout}>Logout</h3>
                        </div>
                    </nav>
                </header>
                <div className={this.state.showNav ? 'show-nav mobile-nav' : ' mobile-nav'}>
                    <div className="mobile-nav-content">
                        <Link to='/'><h3 style={navMenuStyle}>Home</h3></Link>
                        <h3 style={navMenuStyle} onClick={this.handleLogin}>Store</h3>
                        <Link to='/Contact'><h3 style={navMenuStyle}>Contact</h3></Link>

                        <a href={`${window.origin}/api/logout`}>
                            <h3 style={navMenuStyle} onClick={this.logout}>Logout</h3>
                        </a>
                    </div>
                </div>

                <div className="perspective">
                </div>
            </div>
        )
        
    }

}

export default NavBar;