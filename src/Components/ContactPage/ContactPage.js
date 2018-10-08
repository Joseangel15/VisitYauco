import React, { Component } from 'react';
import NavBar from '../../Components/Nav/NavBar';
import Footer from '../Footer/Footer';
import axios from 'axios';
import swal from 'sweetalert2';
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
        
    }

    sendEmail() {

        const toast = swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000
          });
          
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
        toast({
            type: 'success',
            title: 'Message Sent'
          })

    }

    


    render() {
        return (
            <div className='bodyBack'>
                <NavBar />

                <div>
                    <h2 style={{fontFamily: 'Alegreya Sans SC'}}>About Us</h2>
                    <div>
                        <p  className='aboutUs'>Visit Yauco has a mission to promote the natural beauty and interesting tourist attractions of a place I am proud to call home. This website is a student project and it is not officialy endorsed by the local goverment of Yauco.</p>
                    </div>

                    <div style={{marginBottom: '100px'}}>
                        <h2 style={{fontFamily: 'Alegreya Sans SC'}}>Contact Us</h2>
                        <p style={{fontFamily: 'Alegreya Sans', margin: '10px', fontSize: '18px'}}>For more information feel free to send us a message:</p>
                        <div className='contactBox'>
                            <h3 style={{fontFamily: 'Alegreya Sans SC'}}>Contact</h3>
                            <div>
                                <input type="text" name="name" id="" placeholder='Name*' className='contactName' value={this.state.name} onChange={this.inputHandler} />
                                <input type="text" name='email' placeholder='Email*' className='contactEmail' value={this.state.email} onChange={this.inputHandler} />
                            </div>
                            <input type="text" name='subject' placeholder='Subject' className='contactSubject' value={this.state.subject} onChange={this.inputHandler} />
                            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' className='messageBox' value={this.state.message} onChange={this.inputHandler}></textarea>

                            <button className='sendBtn' onClick={this.sendEmail} style={{fontFamily: 'Alegreya Sans SC', fontSize: '18px'}}>Send</button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}


export default ContactPage;


