import React from 'react'
import SideNavigationBar from './_components/SideNavigationBar'
import Header from './_components/Header'

function layout({ children }) {
    return (
        <div >
            <div className=' md:w-64 hidden md:block fixed'>
                <SideNavigationBar />
            </div>
            <div className='md:ml-64'>
                <Header />
                {children}
            </div>
        </div>
    )
}

export default layout
