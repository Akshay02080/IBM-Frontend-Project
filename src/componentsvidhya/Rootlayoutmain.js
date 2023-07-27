import React from 'react'
import Navbarh from './Navbarh'
import { Outlet } from 'react-router-dom'

function Rootlayoutmain() {
  return (
    <div className>
        <Navbarh/>
        <Outlet/>
    </div>
  )
}

export default Rootlayoutmain