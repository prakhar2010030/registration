import React from 'react'
import "./Homepage.css";
const Homepage = () => {
  return (
    <>
   <div className="container_successfull">
     <div className="image_home_left"></div>
     <div className="image_home_right">
       <div className='registration'>
         <span className="text">
           Registration successful!!
         </span>
         <span className="paragraph">
            For confirmation of your seat, please deposit the fee manually at the registration desks at Back Block Or CSIT Block
         </span>
         <span className="success_image"></span>
       </div>
     </div>
   </div>

    </>
  )
}

export default Homepage;