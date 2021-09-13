import React from 'react'

const Cart = () => {
    return (
        <>
        <div className='shoppingCart'>
            <div className='cartWrap'>
            <div className='productInfo'>
                <h2>Product name</h2>
                <p>Product information</p>
                <div className='productIMG'></div>
            </div>            
            <div className='productData'>
                <div className='dataContainer'>
                    <h4>Price</h4>
                    <h4>100</h4>
                </div>
                <div className='dataContainer'>
                <h4>Quantity</h4>
                <h4>100</h4>
                </div>
                <div className='dataContainer'>
                <h4>Subtotal</h4>
                <h4>100</h4>
                </div>
            </div>
            
            </div>
           
            <button className='cartBtn'>X</button>
        </div>
        </>
    )
}

export default Cart
