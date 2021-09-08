import React from 'react'
import { Link } from 'react-router-dom'

// import { ReactComponent as UserIcon } from '../icon/user.svg'

import { ReactComponent as ProfileBtn } from '../icon/usermenu.svg'
import { ReactComponent as Kart } from '../icon/shopping-cart.svg'
import { ReactComponent as ConfigBtn } from '../icon/setting-lines.svg'

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
                <div className='profileIconMobile'>
                    <button className='userButtonMobile'>
                        <ConfigBtn />
                    </button>
                        <h3>Profile</h3>
                </div>
            </div>

            <div className='sideSales'>
                <button>Sale Button</button>
                <button>Sale Button</button>
                <button>Sale Button</button>
            </div>
                
            <div className='sideContent'>                
                <button >
                    <Link to='/About' className='sideBtn'>About</Link >
                    </button> 
                <button>
                    <Link to='/Sale' className='sideBtn'>Sale</Link>
                    </button> 
                <button>
                    <Link to='/Stores' className='sideBtn'>Stores</Link>
                    </button> 
                <button>
                    <Link to='/Contact' className='sideBtn'>Contact</Link>
                </button> 
            </div>
        </div>
        </>
    )
}

export default SideMenu
