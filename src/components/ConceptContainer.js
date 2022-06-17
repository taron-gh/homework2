import React from "react";
import "../styles/Concept.css"
import Concepts from "./Concepts";
import concept1 from "../images/concept1.jpg"
import concept2 from "../images/concept2.jpg"
import concept3 from "../images/concept3.jpg"
import concept4 from "../images/concept4.jpg"
import concept5 from "../images/concept5.jpg"
import concept6 from "../images/concept6.jpg"

function ConceptContainer(){
    return (
        <div className="concepts-container">
            <h2 className="main-titles">Some concept works</h2>
            <Concepts concepts={[
                concept1,
                concept2,
                concept3,
                concept4,
                concept5,
                concept6
            ]}/>

        </div>
    );
}

export default ConceptContainer;