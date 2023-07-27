import React from 'react'
import "./LocalNavbar.css"
import { BiSearchAlt } from "react-icons/bi";

function LocalNavbar(props) {
  return (
    <div className=' localnav'>
      <div>
        <h4 className='text-white'>{props.a}</h4>
      </div>
      <div className='filters'>
        <div>
          <form action="">
            {/* <input style="font-family: 'Font Awesome 5 Free'; font-weight: 700;" type="text" className="form-control" id="inputEmail5" placeholder=" &#xf007; Name"/> */}
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>

          </form>
        </div>
        <div className='ms-4 me-4'>
          <button className="btn text-white border-white btn-outline-primary bt">Sort By</button>
        </div>
        <div>
          <button className="btn text-white border-white btn-outline-primary bt">Filter</button>
        </div>
      </div>

    </div>
  )
}

export default LocalNavbar