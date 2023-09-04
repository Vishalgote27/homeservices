import React from 'react'
import TechnicianNavbar from './components/TechnicianNavbar'
import { Outlet } from 'react-router-dom'

const TechnicianLayout = () => {
    return <>
        <TechnicianNavbar />
        <Outlet />


    </>
}

export default TechnicianLayout 