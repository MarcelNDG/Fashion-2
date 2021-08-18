import React from 'react'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import SaleItemSection from '../components/SaleItemSection'


const Sale = () => {
    return (
        <>
        <header>
            <TopNav />
        </header>
            
            <SaleItemSection />
            <Footer /> 
        </>
    )
}

export default Sale
