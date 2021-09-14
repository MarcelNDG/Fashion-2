import React from 'react'
import Cart from '../components/Cart'

const CartContainer = () => {
    return (
        <>
            <div className='cartCheckoutContainer'>
                <div className='cartContainer'>
                    <Cart />
                    <Cart />
                    <Cart />
                </div>
                <div className='checkoutContainer'>
                    <div className='checkoutInfo'>
                        <h3>Total:</h3>
                        <h3>1.000</h3>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartContainer
