import React from 'react'
import  { useEffect } from 'react'


const ProfileItem = ({adress}) => {

    useEffect(() => {
    const itemBtn = document.getElementById('itemBtn')
    const inputContainer = document.querySelector('.inputContainer')

    itemBtn.addEventListener('click', () =>{
        if (inputContainer.classList.contains('noMenu')) {
            inputContainer.classList.remove('noMenu');
            inputContainer.classList.add('showMenu');
            
        }
    })
        
        return () => {
            
        }
    }, [])
    
    return (
        <div className='profileItem'>
        <h3>Adress:</h3>
        <h4>{adress}</h4>
        <button id='itemBtn'>Change adress</button>
        <div className='inputContainer noMenu'>
            <input type='text'></input>
            <button>Submit</button>
        </div>
        
    </div>
    )
}

export default ProfileItem
