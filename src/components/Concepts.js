import React from "react";
import "../styles/Concept.css"

function Concepts({ concepts }) {
    return (
        <div className="concepts">
            {
                concepts.map((item, index) => {
                    return <img src={item} key={index} alt={"Concepts" + (index+1)}/>
                })
            }
        </div>
    );
}

export default Concepts;