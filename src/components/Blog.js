import React from 'react'

function Blog(props) {
    return (
        <div className="blog_main">
            <h3>{props.data.title}</h3>
            <img src={props.data.img} alt="blog" height="250px" width="250px" className="blog_img" />
            <p>{props.data.decs}</p>
        </div>
    )
}

export default Blog
