import React from 'react'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

const Contact = () => {

    return (
        <>
        <header>
            <TopNav />
        </header>
        <main className='contactMain'>
            <div className='contactContainer'>
                <h2>Contact us...</h2>
                <p>We will email you back!</p>
                <form className='contactForm'>
                    <h3>Based</h3>
                    <input type='text'></input>
                    <h3>Based</h3>
                    <input type='text'></input>
                    <h3>Based</h3>
                    <input type='text'></input>
                </form>
                    <div className='checkContainer'>
                        <h3>Subscribe to the newsletter</h3>
                        <input type='checkbox'></input>
                    </div>                    
            </div>
        </main>

        <Footer />
        </>
    )
}

export default Contact
