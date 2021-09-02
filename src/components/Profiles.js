import React from 'react'
import { ReactComponent as UserIcon } from '../icon/user.svg'

const Profiles = () => {
    return (
        <div className='accountContainer'>
            <div className='profileIcon'>
                <UserIcon />
            </div>
            <h3>User
                <br></br>
                <span>Menu</span>
            </h3>
        </div>
    )
}

export default Profiles
