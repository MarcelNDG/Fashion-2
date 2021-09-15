import React from 'react'

import { ReactComponent as ProfileBtn } from '../icon/usermenu.svg'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

const Profile = () => {
    return (
        <>
        <header>            
            <TopNav />    
        </header>
        <main>
            <div className='profileWrap'>
                <div className='avatarContainer'>
                    
                    <ProfileBtn className='profileAvatar' />
                    <div className='avatarInfo'>
                        <h3>Username</h3>
                        <h4>user_email@gmail.com</h4>
                        <a href='./'>Change account e-mail</a>
                    </div>
                </div>
                <div className='profileformContainer'>
                    
                        <div className='formItem'>
                            <h3>Adress: Avenida siempreviva #1234</h3>
                            <button>Change adress</button>
                            <input type='text'></input>
                        </div>
                        
                    
                </div>

            </div>
            
        </main>  
            
        <Footer />
        </>
    )
}

export default Profile
