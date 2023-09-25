import React from "react";
export default function Photo(props){
   return(
    <div className="photo-img">
        <img src={props.img} alt="Profile_photo"/>
    </div>
   )
}
