import React from 'react'

function Header() {
    const [menu, setSetmenu] = React.useState("header_links");
    window.addEventListener('resize', () => {
        if (window.innerWidth < 620) {
            setSetmenu("header_links_dont")
        } else {
            setSetmenu("header_links")
        }
    })

    return (
        <div className="Header">
            <div className="header_logo">
                <img src="https://www.mastercardcenter.org/content/dam/mc-cig/Logo/logo.png" alt="logo" height="60px" width="auto" />
            </div>
            <div className={menu}>
                <a href="#">About</a>
                <a href="#">Insights Impact</a>
                <a href="#">Engagements</a>
                <a href="#">News Media</a>
            </div>
        </div>
    )
}

export default Header
