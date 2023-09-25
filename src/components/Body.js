import React  from "react";
import Top from "./Top";
import Middel from "./Middel"
import Bottom from "./Bottom"
import Footer from "./Footer"
export default function Body(){
    return(
        <div className="body-item">
            <Top />
            <Middel />
            <Bottom />
            <Footer />
        </div>
    )
}