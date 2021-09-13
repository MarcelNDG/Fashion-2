import { ReactComponent as ProfileBtn } from '../icon/usermenu.svg'
import { ReactComponent as Kart } from '../icon/shopping-cart.svg'
import { ReactComponent as ConfigBtn } from '../icon/setting-lines.svg'

import { useEffect } from 'react'


import { Link } from 'react-router-dom'

import React from 'react'
import MenuBtn from '../components/MenuBtn'
import TopLogo from './TopLogo'
import Exclamation from './Exclamation'
import Profiles from './Profiles'
import SideMenu from './SideMenu'






const TopNav = () => {

    useEffect(() => {
        const userBtn = document.getElementById('userButton')
        const profileMenu = document.getElementById('profileMenu')
        console.log(profileMenu, userBtn);
    
        function showMenu() {
          if(profileMenu.classList.contains('showMenu')){
            profileMenu.classList.remove('showMenu')
            console.log('removed');
          } else{
            profileMenu.classList.add('showMenu')
            console.log('added');
          }
        }
    
        
    
        userBtn.addEventListener("click",showMenu)
    
        return () => {
          
        }
      }, [])

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
                    <Link className='profileBtnText' to='/shoppingCart'>Shopping kart</Link>
                </div>                
                <div className='cartContainer'>
                    <button className='cart'>
                        <ProfileBtn />
                    </button> 
                    <Link className='profileBtnText' to='/profile'>Profile</Link>
                </div>                
                <div className='cartContainer'>
                    <button className='cart'>
                        <ConfigBtn />
                    </button> 
                    <Link className='profileBtnText' to='/settings'>Settings</Link>
                </div>                
                    
            </div>
        </div>
        <SideMenu />
    </>
    )
}


export default TopNav