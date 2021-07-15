import React, { useEffect } from 'react'
import Blog from './Blog';
import Data from '../data';
import '../App.css'


function Main() {
    const [menu, setSetmenu] = React.useState("filter");
    const [menu1, setSetmenu1] = React.useState(null);

    useEffect(() => {
        if (window.innerWidth < 620) {
            setSetmenu1("block")
            setSetmenu("filter_dont")
        } else {
            setSetmenu("filter")
            setSetmenu1("none")
        }
    }, [])

    window.addEventListener('resize', () => {
        if (window.innerWidth < 620) {
            setSetmenu("filter_dont")
            setSetmenu1("block")
        } else {
            setSetmenu("filter")
            setSetmenu1("none")
        }
    })

    return (
        <div className="App">
            <div className="container">
                <div className={menu}>
                    <h3>Filter By</h3><hr />
                    <p>Type  <span>+</span> </p><hr />
                    <p>Topic  <span>+</span> </p><hr />
                    <p>Region  <span>+</span> </p><hr />
                </div>
                <div className="blogs">
                    {
                        Data.map(data => (
                            <Blog key={data.id} data={data} />
                        ))
                    }
                </div>
            </div>
            <div>
                {
                    menu1 === "block" && <i className="fa fa-filter" style={{
                        fontSize: "24px",
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: { menu1 },
                        position: 'fixed',
                        bottom: "0",
                        right: "0",
                        padding: "15px"
                    }}></i>
                }

            </div>
        </div>
    );
}

export default Main;
