import React from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as UserIcon } from '../icon/user.svg'
import Exclamation from './Exclamation'


import { ReactComponent as ProfileBtn } from '../icon/usermenu.svg'
import { ReactComponent as Kart } from '../icon/shopping-cart.svg'
// import { ReactComponent as ConfigBtn } from '../icon/setting-lines.svg'

const SideMenu = () => {
    return (
        <>
        <div className='sideMenu noMenu' id='sideMenu'> 
            <div className='sideProfile'>
                <div className='profileIconMobile'>
                    <button className='userButtonMobile'>
                        <ProfileBtn />
                    </button>
                        <h3>Profile</h3>
                </div>
                <div className='profileIconMobile'>
                    <button className='userButtonMobile'>
                        <Kart />
                    </button>
                        <h3>Check
                            <br></br>
                            <span>Kart</span>
                        </h3>
                </div>
               
            </div>

                           
            <div className='sideContent'>                
                <button >
                    <Link to='/About' className='sideBtn'>About</Link >
                    </button> 
                <button>
                    <Link to='/Sale' className='sideBtn'>Sale<Exclamation className='exclamationMobile'/></Link>
                    </button> 
                <button>
                    <Link to='/Stores' className='sideBtn'>Stores</Link>
                    </button> 
               
            </div>
        </div>
        </>
    )
}

export default SideMenu
