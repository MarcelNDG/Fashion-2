import React from 'react'

import Model from '../img/model.png'

import TopNav from '../components/TopNav'
import SeasonMenu from '../components/SeasonMenu'
import Searchbar from '../components/Searchbar'
import SphereBig from '../components/SphereBig'
import Footer from '../components/Footer'


const Home = () => {
    return (
    <>     
        <header>
            <TopNav />    
        </header>      
                         
        
        <main>
            <h1 className='logo'>FASHION <br></br><span>FASCINATION</span></h1>
            <div className='seasonSearchContainer'>
                <SeasonMenu />
                <Searchbar />
                <SphereBig />
            </div>
        </main>
        <div className="image-container">
            <img className='modelPic' src={Model} alt="Model" />
        </div>
        <Footer />
    </>
    )
}

export default Home
