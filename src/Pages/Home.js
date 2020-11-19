import React from 'react';
import Categories from '../Containers/Categories';
import Footer from '../Containers/Footer';
import Header from '../Containers/Header';
import Navbar from '../Containers/Navbar';
import Recents from '../Containers/Recents';


const Home = () => {
    return(
        <div>
            <Navbar />
            <Header />
            <Categories />
            <Recents />
            <Footer />
        </div>
    )
}

export default Home;