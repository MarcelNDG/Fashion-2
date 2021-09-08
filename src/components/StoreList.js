import React from 'react'
import Store from './Store'


const StoreList = () => {
    return (
        <div className='storeList'>
            <div className='storeContainer'>
                <Store adress={'Avenida siempreviva 1234'} region={'Concepción'} schedule={'00:07 AM - 00:08 PM'}/>
                <Store />
                <Store />
                
            </div>
        </div>
        
    )
}

export default StoreList
