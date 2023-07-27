import React from 'react'
import Verticalcards from './Verticalcards'
import LocalNavbar from './LocalNavbar'

function Webdevelopment() {
  let b={
    x1:"https://d8it4huxumps7.cloudfront.net/uploads/images/courses/2304/banners/648738d5cd869_1101x435__1_.jpg",
    x2:"https://i0.wp.com/academiamag.com/wp-content/uploads/2022/07/ezgif-2-9201bb53b2-1.jpg?fit=1920%2C1080&ssl=1",
    x3:"https://www.wordstream.com/wp-content/uploads/2021/07/affiliate-marketing-header_0-1.png",
    x4:""

  };
  return (

    <div>
      {/* <LocalNavbar a="WebDevelopment"></LocalNavbar> */}
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
            <Verticalcards x={b.x3}></Verticalcards>
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

export default Webdevelopment