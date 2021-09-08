import { ReactComponent as ProfileBtn } from '../icon/usermenu.svg'
import { ReactComponent as Kart } from '../icon/shopping-cart.svg'
import { ReactComponent as ConfigBtn } from '../icon/setting-lines.svg'

import { Link } from 'react-router-dom'

import React from 'react'
import MenuBtn from '../components/MenuBtn'
import TopLogo from './TopLogo'
import Exclamation from './Exclamation'
import Profiles from './Profiles'
import SideMenu from './SideMenu'






const TopNav = () => {
    return(
    <>
        <div className='topNav'>
            <div className='topNavContainer'>
            <TopLogo />
                <ul className='btnList'>
                    <li>
                        <Link to='/about' className='navLink'>About</Link>
                    </li>
                    <li>
                        <Link to='/sale' className='navLink'>Sale<Exclamation /></Link>
                    </li>
                    <li>
                    <Link to='/stores' className='navLink'>Stores</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='navLink'>Contact</Link>
                    </li>
                </ul>
                <MenuBtn /> 
                <Profiles />              
                
                
                   
                          
                
            </div>
            <div className='profileMenu noMenu' id='profileMenu'>                
                <div className='cartContainer'>
                    <button className='cart'>
                        <Kart />
                    </button> 
                    <button className='profileBtnText'>Shopping kart</button>
                </div>                
                <div className='cartContainer'>
                    <button className='cart'>
                        <ProfileBtn />
                    </button> 
                    <button className='profileBtnText'>Profile</button>
                </div>                
                <div className='cartContainer'>
                    <button className='cart'>
                        <ConfigBtn />
                    </button> 
                    <button className='profileBtnText'>Settings</button>
                </div>                
                    
            </div>
        </div>
        <SideMenu />
    </>
    )
}


export default TopNav