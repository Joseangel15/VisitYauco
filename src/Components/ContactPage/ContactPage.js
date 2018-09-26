import React, { Component } from 'react';
import NavBar from '../../Components/Nav/NavBar';
import axios from 'axios';
import './ContactPage.css';


class ContactPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }

        this.inputHandler = this.inputHandler.bind(this);
        this.sendEmail = this.sendEmail.bind(this)
        this.handleComponentMount = this.handleComponentMount.bind(this);
    }

    componentDidMount() {
    }
    
    handleComponentMount(){
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
        
    }

    inputHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    sendEmail() {
        let { name, email, subject, message } = this.state
        let info = {
            name,
            email,
            subject,
            message
        }
        axios.post(`/api/message/`, info).then(res => {
            
            
        })
        this.handleComponentMount()
        alert('Message sent')

    }


    render() {
        return (
            <div>
                <NavBar />

                <div>
                    <h2>About Us</h2>
                    <div>
                        <p>Visit Yauco has a mission to promote the natural beauty and interesting tourist attractions of a place I am proud to call home. This website is a student project and it is not officialy endorsed by the local goverment of Yauco.</p>
                    </div>

                    <div>
                        <h2>Contact Us</h2>
                        <p>For more information feel free to send me a message:</p>
                        <div className='contactBox'>
                            <h3>Contact</h3>
                            <div>
                                <input type="text" name="name" id="" placeholder='Name*' className='contactName' value={this.state.name} onChange={this.inputHandler} />
                                <input type="text" name='email' placeholder='Email*' className='contactEmail' value={this.state.email} onChange={this.inputHandler} />
                            </div>
                            <input type="text" name='subject' placeholder='Subject' className='contactSubject' value={this.state.subject} onChange={this.inputHandler} />
                            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='messageBox' value={this.state.message} onChange={this.inputHandler}></textarea>

                            <button className='sendBtn' onClick={this.sendEmail}>Send</button>
                        </div>
                    </div>
                </div>

                <div className='dashFooter'>

                </div>
            </div>
        )
    }
}


export default ContactPage;


