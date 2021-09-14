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
            <h2 className='cartTitle'>Cart</h2>
        <div className='productTable'>
            <h3>Product </h3>
            <h3>Price </h3>
            <h3>Quantity </h3>
            <h3>Subtotal </h3>            
        </div>
           
            <CartContainer />
        </main>

        <Footer />    
            
        </>
    )
}

export default ShoppingCart
