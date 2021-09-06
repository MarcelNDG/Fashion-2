import React from 'react'
import { useEffect } from 'react'


import { ReactComponent as HmbgBtn } from '../icon/hmbg-round.svg'

const MenuBtn = () => {

    useEffect(() => {

        const mobileBtn = document.getElementById('mobileBtn')
        const sideMenu = document.getElementById('sideMenu')
        console.log(mobileBtn);

        mobileBtn.addEventListener('click', () => {
            if (sideMenu.classList.contains('showMenu')) {
                sideMenu.classList.remove('showMenu')
                sideMenu.classList.add('noMenu')
                
            } else {
                sideMenu.classList.add('showMenu')
                sideMenu.classList.remove('noMenu')
                console.log('test');
            }

             

        })
        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className='btnContainer'>
            <button id='mobileBtn'>
                <HmbgBtn className='hmbgIcon'/>
            </button>
        </div>
    )
}

export default MenuBtn
