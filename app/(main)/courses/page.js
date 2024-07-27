import React from 'react'
import WelcomeBanner from '../_components/WelcomeBanner'

function Cousese() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            <div className='col-span-2'>
                <WelcomeBanner />
            </div>
            <div>
                Right
            </div>
        </div>
    )
}

export default Cousese
