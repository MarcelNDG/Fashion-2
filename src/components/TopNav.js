import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
import { Link } from 'react-router-dom'

import React from 'react'
import TopLogo from './TopLogo'



const TopNav = () => {
    return(
    <header>
        <div className='topNav'>
            <TopLogo />
            <div className='topNavContainer'>
                <ul className='btnList'>
                    <li>
                        <Link to='/about' className='navLink'>About</Link>
                    </li>
                    <li>
                        <Link to='/sale' className='navLink'>Sale</Link>
                    </li>
                    <li>
                        <button>Stores</button>
                    </li>
                    <li>
                    <Link to='/contact' className='navLink'>Sale</Link>
                    </li>
                </ul>
                
                <button>
                    <Logo className='hmbgIcon'/>    
                </button>           
                
            </div>
        </div>
    </header>
    )
}


export default TopNav