import React from 'react'
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
import Social from './components/social/Social';
import Projects from './components/projects/Projects';
import Cp from './components/cp/Cp';
import Home from './components/home/Home';

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Projects/>
            <Cp/>
            <Social/>
            <Footer/>
        </div>
    )
}

export default App;
