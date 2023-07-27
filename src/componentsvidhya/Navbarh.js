import React from 'react';
import { Link } from 'react-router-dom'
import {BsBook} from 'react-icons/bs'
import {AiTwotoneHome} from 'react-icons/ai'
import {IoMdLogIn} from 'react-icons/io'
import {SiGnuprivacyguard} from 'react-icons/si'
import './Navbarh.css'


function Navbarh() {

  return (

    <div className='m-1'>
    <nav className="navbar navbar-expand nav-parent ">
      <div className="child1">
      <Link className="nav-link  " to="/Logo"><button className='btn'><BsBook/></button></Link>
      </div>
   <ul className="navbar-nav child-2">
      {/* link to Home */}
      <li className="nav-item nav-childs ">
        <Link className="nav-link  " to="/"><button className='btn '><AiTwotoneHome/>Home</button></Link>
      </li>
      <li className="nav-item nav-childs ">
        <Link className="nav-link  " to="/courses"><button className='btn '><AiTwotoneHome/>Courses</button></Link>
      </li>
      <li className="nav-item nav-childs ">
        <Link className="nav-link  " to="/compete"><button className='btn '><AiTwotoneHome/>Compete</button></Link>
      </li>
      <li className="nav-item nav-childs ">
        <Link className="nav-link  " to="/mentoring"><button className='btn '><AiTwotoneHome/>mentorship</button></Link>
      </li>
      <li className="nav-item nav-childs ">
        <Link className="nav-link  " to="/community"><button className='btn '><AiTwotoneHome/>Community</button></Link>
      </li>

     {/* link to Login */}
      {/* <li className="nav-item nav-childs" >
        <Link className="nav-link " to="/Login"><button className='btn '><IoMdLogIn/>Login</button> </Link>
      </li> */}

      
       {/* link to home signup*/}
      {/* <li className="nav-item nav-childs">
        <Link className="nav-link " to="/signin"><button className='btn  '><SiGnuprivacyguard/>signup </button></Link>
      </li> */}
    </ul>
</nav>
</div>



































    
  )
}

export default Navbarh