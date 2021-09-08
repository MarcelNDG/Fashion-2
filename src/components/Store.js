import React from 'react'

const Store = ({location, adress, region, schedule}) => {
    return (
        <div className='store'>
            <div className='storeData'>
                <h3>{location}</h3>
                <div className='storeContainer'>
                    <div className='storeAdressContainer'>
                        <h4>{adress}</h4>
                        <h4>{region}</h4>
                        <h4>{schedule}</h4>
                        <button className='storeMapBtn'>Check in Google Maps</button>
                    </div>
                    <div className='storeImgPLaceholder'></div>
                </div>
                
                
            </div>
        </div>
    )
}

export default Store
