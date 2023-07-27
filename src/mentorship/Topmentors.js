import React from 'react'
import "./Topmentors.css"
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import Mentorscard from './Mentorscard';

function Topmentors() {
    let b={
       
        x2:"https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/641068b502991.webp?d=240x240",
        x3:"https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/63ea11b8ad849.jpg?d=240x240",
        x4:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBMc-zPQZNVjxD9xj5pORkdp1lX95Ld_U9A&usqp=CAU"
    }
    let names={
            a1:{
                name:"Ashish Tripathy",
                desc:"Senior Data Scientist at LinkedIn | Ex SAP, WNS, Wipro",
                x1:"https://d8it4huxumps7.cloudfront.net/uploads/mentors/profile/641068b502991.webp?d=240x240"
            },
            a2:{
                name:"Srilekha V",
                desc:"SDE @JP Morgan Chase | Ex PayPal | Deep Learning | Computer Vision",
                x1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLBMc-zPQZNVjxD9xj5pORkdp1lX95Ld_U9A&usqp=CAU"

            }
    }
  return (
    <div>
        <div className='container topmentors'>
            <h1><BsFillEmojiSunglassesFill></BsFillEmojiSunglassesFill>Top Mentors</h1>
            <h4>Looking for the best of the best? Here're the top-rated mentors by the learners' community.</h4>
        </div>
        <div className='d-flex justify-content-center'>
            <div>
                <button className='btn btn btn-outline-warning m-3'>Technology</button>
            </div>
            <div>
                <button className='btn btn btn-outline-warning m-3'>Management</button>
            </div>
            <div>
                <button className='btn btn btn-outline-warning m-3'>Beneral</button>
            </div>  
        </div>
        <div className='d-flex justify-content-evenly'>
            <div>
                <Mentorscard x={names.a1} ></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a2}></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a1}></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a2}></Mentorscard>
            </div>
        </div>
        <div className='d-flex justify-content-evenly'>
            <div>
                <Mentorscard x={names.a2} ></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a1}></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a2}></Mentorscard>
            </div>
            <div>
                <Mentorscard x={names.a1}></Mentorscard>
            </div>
        </div>
    </div>
  )
}

export default Topmentors