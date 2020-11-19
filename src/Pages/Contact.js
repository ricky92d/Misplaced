import React from 'react';
import ContactForm from '../Containers/ContactForm';
import Footer from '../Containers/Footer';
import Navbar from '../Containers/Navbar';

const Contact = () => {
    return(
        <div>
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Contact;