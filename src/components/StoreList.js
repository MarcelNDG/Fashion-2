import React from 'react'
import Store from './Store'


const StoreList = () => {
    return (
        <div className='storeList'>
            <h2>Check our stores...</h2>
            <div className='storeListContainer'>
                <Store location={'Mordor Gates'} adress={'Avenida siempreviva #1234'} region={'Concepción'} schedule={'00:07 AM - 00:08 PM'}/>
                <Store location={'Mordor Gates'} adress={'Avenida siempreviva #1234'} region={'Concepción'} schedule={'00:07 AM - 00:08 PM'}/>
                <Store location={'Mordor Gates'} adress={'Avenida siempreviva #1234'} region={'Concepción'} schedule={'00:07 AM - 00:08 PM'}/>
                
                
                
            </div>
        </div>
        
    )
}

export default StoreList
