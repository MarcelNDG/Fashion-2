import { ReactComponent as Logo } from '../icon/hmbg-round.svg'
import React from 'react'

const TopNav = () => {
    return(
        <div className='topNav'>
            <div className='topNavContainer'>
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>

                <button>
                    <Logo className='hmbgIcon'/>    
                </button>           
                
            </div>
        </div>
    )
}


export default TopNav