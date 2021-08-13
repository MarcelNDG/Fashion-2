import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
import { Link } from 'react-router-dom'

import React from 'react'

const TopNav = () => {
    return(
    <header>
        <div className='topNav'>
            <div className='topNavContainer'>
                <ul className='btnList'>
                    <li>
                        <Link to='/about' className='navLink'>About</Link>
                    </li>
                    <li>
                        <button>Sale</button>
                    </li>
                    <li>
                        <button>Stores</button>
                    </li>
                    <li>
                        <button>Contact</button>
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