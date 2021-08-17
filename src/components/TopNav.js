import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
import { Link } from 'react-router-dom'

import React from 'react'
import TopLogo from './TopLogo'
import Exclamation from './Exclamation'




const TopNav = () => {
    return(
    <>
        <div className='topNav'>
            <TopLogo />
            <div className='topNavContainer'>
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
                
                <button>
                    <Logo className='hmbgIcon'/>    
                </button>           
                
            </div>
        </div>
    </>
    )
}


export default TopNav