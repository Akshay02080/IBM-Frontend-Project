import React from 'react'
import Verticalcards from './Verticalcards'
import LocalNavbar from './LocalNavbar'

function Programming() {
  let b={
    x1:"https://www.aqskill.com/wp-content/uploads/2021/06/3865795.jpg",
    x2:"https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230703144619/CPP-Language.png",
    x3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs_HqUFT3YoGxxZZFJMvlnVfMGF-hWs73zMyB_Nc21BvgLWWMePPz6X6WaKW6klCjA5EM&usqp=CAU",
    x4:"https://contentstatic.techgig.com/thumb/msid-80255871,width-460,resizemode-4/Beginner-tips-to-become-a-successful-Python-developer.jpg?88712"
  }
  return (
    <div >
        {/* <LocalNavbar a="Programming"></LocalNavbar> */}
        <div className='d-flex justify-content-center   mt-5'>
            
            <div>
            <Verticalcards x={b.x1}></Verticalcards>
            </div>
            <div>
            <Verticalcards x={b.x2}></Verticalcards>
            </div>
            <div>
            <Verticalcards x={b.x3}></Verticalcards>
            </div>
        </div>
        <div className='d-flex justify-content-center mt-5'>
            
            <div>
            <Verticalcards x={b.x4}></Verticalcards>
            </div>
            <div>
            <Verticalcards x={b.x3}></Verticalcards>
            </div>
            <div>
            <Verticalcards x={b.x1}></Verticalcards>
            </div>
        </div>

    </div>
  )
}

export default Programming