import React from 'react';
import './ContactForm.css';
import Button from '../Components/Button';

const ContactForm = () => {
    return(
        <div className='Contact'>
            
            <div className="wrapper">
                <div className="title">Contact Us</div>
                
                

                <div className="form">
                    <div className="input_field">
                        <input type="text" placeholder="Email Address" className="input"/>
                        <i className="fas fa-user"></i>
                    </div>

                    <div className="input_field">
                        <input type="text" placeholder="Title" className="input"/>
                        <i class="fas fa-pencil-alt"></i>
                    </div>
                    

                    <div className="input_field">
                        
                        <textarea placeholder="message" className="input"></textarea>
                        <i class="fas fa-envelope"></i>
                    </div>

                    
                    
                    <div className='Contact-Button'>
                        <Button>Send</Button>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ContactForm;