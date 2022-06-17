import React from "react";
import "../styles/Blog.css"
import blog1 from "../images/blog1.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.jpg"
import Blog from "./Blog";



function BlogContainer() {
    return (
        <div className="blogs-container">
            <h2 className="main-titles">Blog</h2>
            <div className="blogs">
                <Blog title="Businesswise" imgSrc={blog1} text="Businesswise freelance was a
                        project where I worked as a
                        designer. The main goal of
                        businesswise is to gather
                        podcasts in various categories
                        for professional people." link="#" />
                <Blog title="Simple Scanner" imgSrc={blog2} text="Simple Scanner is an application
                        that we developed when I was
                        working at Enrich mobile. With
                        Simple scanner, you can scan
                        your documents and convert them
                        to PDF" link="#" />
                <Blog title="Musix" imgSrc={blog3} text="Musix is a side project I prepared
                        in my spare time. Spotify and Apple
                        Music competitors. The biggest
                        advantage compared to its competitors
                        is that it provides higher sound quality." link="#" />
            </div>
        </div>
    );
}

export default BlogContainer;