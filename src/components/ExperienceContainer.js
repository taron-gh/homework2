import React from "react";
import "../styles/Experience.css"
import Experience from "./Experience";

function ExperienceContainer(){
    const experiences =[
        {
            company: "Norma",
            name: "Digital Product Designer",
            time: "Mar 21 — Now"
        },
        {
            company: "Enrich mobile",
            name: "UI Designer",
            time: "Apr 2020 — Mar 21"
        },
        {
            company: "ASDC",
            name: "UI Designer",
            time: "Jun 2020 — Mar 20"
        },
        {
            company: "Talent Mondo",
            name: "Contract UI Designer",
            time: "Mar 20 — Jun 20"
        },
        {
            company: "MobileApp",
            name: "iOS Developer & UI Designer",
            time: "Jan 19 — Mar 20"
        },
    ]
    return (
        <div className="experience-container">
            <h2 className="main-titles, experience-title">Experience</h2>
            <div className="experiences">
            {
                experiences.map((item, index) => {
                    return (
                        <Experience key={index} data={item}/>
                    )
                })
            }
            </div>
        </div>

    );
}

export default ExperienceContainer;