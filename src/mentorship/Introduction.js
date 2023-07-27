import React from 'react'
import { BiSearchAlt2} from "react-icons/bi";
import "./Introduction.css"

function Introduction() {
  return (
    <div>
        <div className='intro'>
            <div className='container innerblock1'>
                <h1 className='mt-3 '>1-on-1 Mentorship</h1>
                <h4 className='mt-3' >Book a session with unstoppable mentors across domains & work together to build your career!</h4>
                <div className='d-flex mt-4'>
                    <div>
                        <button className='btn btn-primary m-3'>Find mentors <BiSearchAlt2/></button>
                    </div>
                    <div>
                        <button className='btn btn-outline-primary m-3'>Be a Mentor</button>
                    </div>
                </div>
            </div>
            <div>
                <img src='https://cdn.unstop.com/uploads/images/unstop/mentorship-desktop-banner-new.png?d=1200x834' width="600px" height="417px"></img>
            </div>
        </div>
    </div>
  )
}

export default Introduction