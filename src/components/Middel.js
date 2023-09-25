import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Middel(){
    return(
        <div className="middel">
            <span><button className="b-e"><FontAwesomeIcon className="icons" icon={faEnvelope} />Email</button></span>
            <span><button className="b-l"><i className="icons" class="fa-brands fa-linkedin"></i>LinkedIn</button></span>
        </div>
    )
}