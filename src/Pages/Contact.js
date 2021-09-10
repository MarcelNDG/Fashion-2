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
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin egestas fermentum efficitur. Vivamus volutpat risus augue, vitae tristique diam interdum ut. Nam eget libero commodo risus tristique bibendum ut in turpis. Nulla lacinia condimentum mauris ac dictum. Cras malesuada nibh finibus orci ultrices scelerisque.</p>
            </div>
        </main>

        <Footer />
        </>
    )
}

export default Contact
