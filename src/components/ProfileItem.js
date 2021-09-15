import React from 'react'

const ProfileItem = () => {
    return (
        <div className='profileItem'>
        <h3>Adress:</h3>
        <h4>Avenida siempreviva #1234</h4>
        <button>Change adress</button>
        <div className='inputContainer'>
            <input type='text'></input>
            <button>Submit</button>
        </div>
        
    </div>
    )
}

export default ProfileItem
