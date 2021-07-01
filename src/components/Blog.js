import React from 'react'
import { useHistory } from 'react-router-dom'

function Blog(props) {
    const history = useHistory()
    return (
        <div onClick={() => {

            history.push(`/blog/${props.data.id}`)
        }} className="blog_main">
            <h3 >{props.data.title}</h3>
            <img src={props.data.img} alt="blog" height="250px" width="270px" className="blog_img" />
            <p>{props.data.decs}</p>
        </div>
    )
}

export default Blog
