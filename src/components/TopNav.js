import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
import React from 'react'

const TopNav = () => {
    return(
        <div className='topNav'>
            <div className='topNavContainer'>
                <ul className='btnList'>
                    <li>
                        <button>Meet Us!</button>
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
    )
}


export default TopNav