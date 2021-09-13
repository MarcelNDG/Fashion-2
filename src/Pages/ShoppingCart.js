import React from 'react'

import TopNav from '../components/TopNav'
import CartContainer from '../components/CartContainer'

import Footer from '../components/Footer'

const ShoppingCart = () => {
    return (
        <>
        <header>            
            <TopNav />    
        </header>
        <main>
            <h2>Cart</h2>
            <CartContainer />
        </main>

        <Footer />    
            
        </>
    )
}

export default ShoppingCart
