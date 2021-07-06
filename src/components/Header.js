import React, { useEffect } from 'react'

function Header() {
    const [menu, setSetmenu] = React.useState("header_links");
    const [menuBar, setMenuBar] = React.useState(false);
    const [showLinks, setShowLinks] = React.useState(false);

    window.addEventListener('resize', () => {
        if (window.innerWidth < 620) {
            setSetmenu("header_links_dont")
            setMenuBar(true);
        } else {
            setSetmenu("header_links")
            setMenuBar(false);
            setShowLinks(false);
        }
    })

    useEffect(() => {
        if (window.innerWidth < 620) {
            setSetmenu("header_links_dont")
            setMenuBar(true);
        } else {
            setSetmenu("header_links")
            setMenuBar(false);
            setShowLinks(false);
        }
    }, [])

    return (
        <div className="wrapper">
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
                {
                    menuBar ?
                        <>
                            <i onClick={() => setShowLinks(!showLinks)} className="fa fa-bars"></i>
                        </>
                        :
                        null
                }
            </div>
            {
                showLinks &&
                <div className="links">
                    <p>About</p>
                    <p>Insights Impact</p>
                    <p>Engagements</p>
                    <p>News Media</p>
                </div>
            }
        </div>
    )
}

export default Header
