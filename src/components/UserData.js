import React from 'react';
import "../styles/UserData.css"
import avatar from "../images/avatar.jpg"


function UserData({contactLink, headline, description}) {
    return (
        
        <div className="user-info">
            <div className="personal-container">
                <img src={avatar} alt="Avatar" className="avatar"/>
                <p className="link, mb-16">
                    <a href={contactLink}>Contact me</a>
                </p>
                <h1 className="main-titles">{headline}</h1>
                <p className="main-txt">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default UserData;