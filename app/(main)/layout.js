import React from 'react'
import SideNavigationBar from './_components/SideNavigationBar'
import Header from './_components/Header'

function layout({ children }) {
    return (
        <div >
            <div className=' sm:w-64 hidden sm:block fixed'>
                <SideNavigationBar />
            </div>
            <div className='sm:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout
