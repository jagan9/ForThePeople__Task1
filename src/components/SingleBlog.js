import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Blog from './Blog'

function SingleBlog(props) {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0)
        const singleData = props.Data.filter((data) => data.id == id);
        setData(singleData[0]);
    }, [id])

    return (
        <div>
            {
                data && props.Data &&
                <div>
                    <div style={{ maxWidth: "80%" }} >
                        <h4 className="sp-title">{data.title}</h4>
                        <br />
                        <h2 className="sp-heading">{data.heading}</h2>
                        <p className="sp-decs">{data.decs}</p>
                        <img className="sp-img" src={data.img} alt={data.title} />
                        <p className="sp-data-description">{data.description}</p>
                        <h4 className="sp-related-content">Related Content</h4>
                    </div>
                    <div className="related-content">
                        <Blog data={props.Data[0]} />
                        <Blog data={props.Data[1]} />
                        <Blog data={props.Data[2]} />
                    </div>
                </div>
            }
        </div>
    )
}

export default SingleBlog
