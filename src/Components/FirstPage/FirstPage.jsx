import React from "react";
import videoBg from '../../assets/Car.mp4'

import './FirstPage.css'

const FirstPage = ()=>{
    return(
        <div className="FirstPage">  
             <video src={videoBg} autoPlay loop muted/>
        </div>
    )

}
export default FirstPage;