import React from 'react'
import TopNav from '../components/TopNav'
import Footer from '../components/Footer'
import StoreList from '../components/StoreList'


const Stores = () => {
    return (
        <>  
            <header>
                <TopNav />
            </header>
            <main className='storeMain'>               
                <StoreList />                
            </main>
            
            <Footer />
        </>
    )
}

export default Stores
