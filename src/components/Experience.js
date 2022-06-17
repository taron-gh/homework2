import React from "react";
import "../styles/Experience.css"

function Experience({ data }) {
    return (

        <div className="experience">
            <h3 className="experience-company">{data.company}</h3>
            <p className="experience-name">{data.name}</p>
            <p className="experience-time">{data.time}</p>
        </div>
    );
}

export default Experience;