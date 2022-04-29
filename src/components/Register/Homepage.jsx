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
           <br></br>
           
           <h3>
           For confirmation of your seat, please deposit the fee manually at the registration desks at Back Block Or CSIT Block or Basic IT lab 
             </h3> 
             <h6>UPI ID-9696469589</h6>
         </span>
         <span className="success_image"></span>
       </div>
     </div>
   </div>

    </>
  )
}

export default Homepage;