import React from "react";

function Blog({title, imgSrc, text, link}) {
    return (
        <div className="blog">
            <img src={imgSrc} alt={title} />
            <h3 className="blog-title">{title}</h3>
            <p className="blog-txt">
                {text}
            </p>
            <a className="link" href={link}>See All</a>
        </div>
    );
}

export default Blog