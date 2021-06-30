import React, { useEffect} from 'react'

function Header() {
    const [menu, setSetmenu] = React.useState("header_links");
    window.addEventListener('resize', () => {
        if (window.innerWidth < 620) {
            setSetmenu("header_links_dont")
        } else {
            setSetmenu("header_links")
        }
    })
    
    useEffect(()=>{
    if (window.innerWidth < 620) {
            setSetmenu("header_links_dont")
        } else {
            setSetmenu("header_links")
        }
    },[])

    return (
        <div className="Header">
            <div className="header_logo">
                <img src="https://www.mastercardcenter.org/content/dam/mc-cig/Logo/logo.png" alt="logo" height="60px" width="auto" />
            </div>
            <div className={menu}>
                <p>About</p>
                <p>Insights Impact</p>
                <p>Engagements</p>
                <p>News Media</p>
            </div>
        </div>
    )
}

export default Header
