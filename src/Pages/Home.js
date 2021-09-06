import React from 'react'


import Model from '../img/model.png'

import TopNav from '../components/TopNav'
import MenuBtn from '../components/MenuBtn'
import SeasonMenu from '../components/SeasonMenu'
import Searchbar from '../components/Searchbar'
import SphereBig from '../components/SphereBig'
import Footer from '../components/Footer'


const Home = () => {
    return (
        <>     
         
        
        <header>
            <MenuBtn /> 
            <TopNav />    
        </header>      

        <main>
            <h1 className='logo'>FASHION <br></br><span>FASCINATION</span></h1>
            <div className='seasonSearchContainer'>
                <SeasonMenu />
                <Searchbar />
            </div>
        </main>
        <div className="image-container">
            <SphereBig />
            <img className='modelPic' src={Model} alt="Model" />
        </div>
        <Footer />

        <div className='sideMenu'>            
            <div className='sideContent'></div>
        </div>
    </>
    )
}

export default Home
