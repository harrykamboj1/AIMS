import React from 'react'
import SideNavigationBar from './_components/SideNavigationBar'

function layout({ children }) {
    return (
        <div className='grid'>
            <div className=' bg-red-400 sm:w-64 hidden sm:block grid-cols-3 fixed'>
                <SideNavigationBar />
            </div>
            <div className='sm:ml-64 grid-cols-9 bg-blue-400 w-full'>
                {children}
            </div>
        </div>
    )
}

export default layout
