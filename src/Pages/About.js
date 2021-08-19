import React from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import SphereBig from '../components/SphereBig'

import Model2 from '../img/model2.png'

import { ReactComponent as Signature } from '../svg/signature.svg'



const About = () => {
    return (
        <>
            <header>
                <TopNav />
            </header>
            <main className='aboutMain'>
                <h2>About Us...</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget egestas diam. Nam tincidunt sit amet nunc in hendrerit. Praesent dapibus ligula vitae nisi posuere sodales. Morbi tempor sodales bibendum. Quisque elementum felis nec fringilla malesuada. Suspendisse potenti. Pellentesque augue dolor, finibus sed laoreet id, pretium a velit. Nam commodo sagittis magna a faucibus. Vivamus pharetra pulvinar ligula id viverra. Praesent aliquam est ex, dignissim porttitor ipsum cursus et. Maecenas in maximus mi, sed posuere nulla. Aenean sit amet dictum velit. Proin vestibulum ante sed odio tempus, sed euismod leo sagittis. Vivamus porttitor hendrerit dolor et molestie. </p>
                <Signature className='signature' />           
            </main>
            <div className="image-container">
                <SphereBig />
                <img className='modelPic' src={Model2} alt="Model" />
            </div>
            <Footer />
        </>
    )
}

export default About
