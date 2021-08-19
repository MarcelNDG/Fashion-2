import React from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import SphereBig from '../components/SphereBig'

import Model2 from '../img/model2.png'


const About = () => {
    return (
        <>
        <header>
            <TopNav />
        </header>
        <div className="image-container">
            <SphereBig />
            <img className='modelPic' src={Model2} alt="Model" />
        </div>    
            <Footer />            
        </>
    )
}

export default About
