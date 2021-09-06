import React from 'react'
import { useEffect } from 'react'


import { ReactComponent as HmbgBtn } from '../icon/hmbg-round.svg'

const MenuBtn = () => {

    useEffect(() => {

        const mobileBtn = document.getElementById('mobileBtn')
        console.log(mobileBtn);

        mobileBtn.addEventListener('click', () => {
            console.log('holi');
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
