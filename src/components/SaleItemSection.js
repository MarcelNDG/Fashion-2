import React from 'react'
import SaleItems from '../components/SaleItems'


const SaleItemSection = () => {
    return (
        <>
        <main>
            <h2>Currently on SALE!</h2>
            <div className='saleItemSection'>
                <SaleItems />
            </div>
        </main>    
        </>
    )
}

export default SaleItemSection
