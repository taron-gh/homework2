import React from "react";
import "../styles/FeedbackForm.css"
function FeedbackForm(){
    return(
        <div className="help-form-container">
            <h2 className="main-titles">Looking for help with design</h2>
            <p className="form-details">Send me details</p>
            <form className="form" id="formId" autoComplete="on">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required/>

                <label htmlFor="email">Emial Address</label>
                <input type="email" id="email" placeholder="Enter your email" required/>

                <label htmlFor="details">Detail</label>
                <textarea name="details" id="details" placeholder="Enter your message" required></textarea>
                
                <input type="submit" value="Submit" form="formId"/>
            </form>
        </div>
    );
}

export default FeedbackForm;