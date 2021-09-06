import React from 'react'

import { ReactComponent as HmbgBtn } from '../icon/hmbg-round.svg'

const MenuBtn = () => {
    return (
        <div className='btnContainer'>
            <button>
                <HmbgBtn className='hmbgIcon'/>
            </button>
        </div>
    )
}

export default MenuBtn
