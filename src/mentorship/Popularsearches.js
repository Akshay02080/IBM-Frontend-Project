import React from 'react'
import {AiFillThunderbolt } from "react-icons/ai";
import "./Popularsearches.css"
import Searchcards from './Searchcards';
function Popularsearches() {
    let a={
        name1:{
            x1:"https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/personal-branding-icon.png?d=533x313",
            text:"Placement Preparation & Mock Interview"
        },
       name2:{
        x1:"https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/mba-preparation-icon.png?d=546x407",
        text:"MBA Preparation (CAT,XAT,IIFT,NMAT,SNAP)"
       },
       name3:{
        x1:"https://d8it4huxumps7.cloudfront.net/uploads/images/mentorship/data-science-icon.png?d=540x310",
        text:"Data Science and Machine Learning"
       }
    }
  return (
    <div className=' popularsearches mt-4'>
        <div className='container'>
            <div className='text-center pt-4'>
                <h1 className=''><AiFillThunderbolt></AiFillThunderbolt>Popular Searches</h1>
            </div>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <Searchcards x={a.name2}></Searchcards>
                </div>
                <div>
                    <Searchcards x={a.name1}></Searchcards>
                </div>
                <div>
                    <Searchcards x={a.name3}></Searchcards>
                </div>

            </div>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <Searchcards x={a.name3}></Searchcards>
                </div>
                <div>
                    <Searchcards x={a.name2}></Searchcards>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popularsearches