import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as UserIcon } from '../icon/user.svg'



const SideMenu = () => {
    return (
        <>
        <div className='sideMenu noMenu' id='sideMenu'> 
        <div className='sideProfile'>
            <button className='userButton'><UserIcon /></button>
            <button> </button>
            <button> </button>
            
        </div>
             
            <div className='sideContent'>
                <ul>
                    <button>
                        <Link to='/About'>ITEM</Link >
                        </button> 
                    <button>
                        <Link to='/Sale'>ITEM</Link>
                        </button> 
                    <button>
                        <Link to='/Stores'>ITEM</Link>
                        </button> 
                    <button>
                        <Link to='/Contact'>ITEM</Link>
                        </button> 
                </ul>
            </div>
        </div>
        </>
    )
}

export default SideMenu
