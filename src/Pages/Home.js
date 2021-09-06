import React from 'react'

import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
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
        <div className='sideMenu'>
            <div className='sideNav'>
                <Logo className='hmbgIcon sideNavIcon'/>
            </div>
            <div className='sideContent'></div>
        </div>   
        
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
    </>
    )
}

export default Home
