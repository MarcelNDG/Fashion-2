import React from 'react'

const Cart = () => {
    return (
        <>
        <div className='shoppingCart'>
            <div className='cartWrap'>            
            <div className='productInfo'>
                <h4>Product name</h4>
                <div className='productIMG'></div>
            </div>
                     
            
                <div className='dataContainer'>
                    
                    <h4>100</h4>
                </div>
                <div className='dataContainer'>
                
                <h4>100</h4>
                </div>
                <div className='dataContainer'>
                
                <h4>100</h4>
                
            </div>
            
            </div>
           
            <button className='cartBtn'>X</button>
        </div>
        </>
    )
}

export default Cart
