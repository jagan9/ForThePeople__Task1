import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { users } from '../../../data';

function Governance() {

    const [index, setIndex] = useState(0);

    const handleLeftClick = () => {
        if (index === 0) {
            setIndex(users.length - 1);
        } else {
            setIndex(prev => prev - 1);
        }
    }

    const handleRightClick = () => {
        if (index === users.length - 1) {
            setIndex(0);
        } else {
            setIndex(prev => prev + 1);
        }
    }

    return (
        <div >
            <div style={{
                paddingTop: "30px",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around"
            }}>


                <div style={{
                    width: "250px",
                    margin: "10px 10px",
                }}>
                    <Paper style={{
                        Width: "250px",
                        height: "280px",
                        padding: "15px",
                        backgroundColor: "rgba(255,236,236,0.3)"
                    }} elevation={3}>
                        <h2 style={{
                            color: "red"
                        }}>
                            Executive
                        </h2>
                        <br />
                        <hr style={{
                            color: "red"
                        }} />
                        <br />
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "27px"
                        }}>
                            Executive is a lead organ, responsible to monitor and manages all day-to-day works of the FTP.
                        </p>
                    </Paper>
                </div>


                <div style={{
                    width: "250px",
                    margin: "10px 10px"
                }}>
                    <Paper style={{
                        Width: "250px",
                        height: "280px",
                        padding: "15px",
                        backgroundColor: "rgba(233,222,243,0.2)"
                    }} elevation={3}>
                        <h2 style={{
                            color: "blueviolet"
                        }}>
                            Board
                        </h2>
                        <br />
                        <hr />
                        <br />
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "27px"
                        }}>
                            Board is a decision-making organ, responsible to review, advise, manage, plan, collaborate and implement works of the organizations. Board is composed of Board of Directors, and Advisory Board.
                        </p>
                    </Paper>
                </div>


                <div style={{
                    width: "250px",
                    margin: "10px 10px"
                }}>
                    <Paper style={{
                        Width: "250px",
                        height: "280px",
                        padding: "15px",
                        backgroundColor: "rgba(255,250,231,0.3)"
                    }} elevation={3}>
                        <h2 style={{
                            color: "#d8aa03"
                        }}>
                            Secretariat
                        </h2>
                        <br />
                        <hr />
                        <br />
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "27px"
                        }}>
                            Secretariat is an administrative organ, responsible for financial management; HRM and Recruting; Technical and digital; marketing and communication works of the Organization.
                        </p>
                    </Paper>
                </div>


                <div style={{
                    width: "250px",
                    margin: "10px 10px"
                }}>
                    <Paper style={{
                        Width: "250px",
                        height: "280px",
                        padding: "15px",
                        backgroundColor: "rgba(233,255,234,0.3)"
                    }} elevation={3}>
                        <h2 style={{
                            color: "#049009"
                        }}>
                            Operations
                        </h2>
                        <br />
                        <hr />
                        <br />
                        <p style={{
                            fontSize: "16px",
                            lineHeight: "27px"
                        }}>
                            Operations is an execution organ, responsible for events and projects of the Organization.


                        </p>
                    </Paper>
                </div>


            </div>
            <br /><br /><br /><br />
            <div>
                <div style={{ textAlign: "center" }}>
                    <h1>
                        Meet The Team
                    </h1>
                    <p style={{
                        marginTop: "10px",
                        height: "2px",
                        width: "50px",
                        margin: "auto",
                        backgroundColor: "black"
                    }}></p>
                </div>
                <div style={{

                    maxWidth: "400px",
                    textAlign: "center",
                    margin: "50px auto",
                }}
                >
                    <div style={{
                        position: "relative",
                    }}>
                        <p
                            onClick={handleLeftClick}
                            style={{
                                backgroundColor: "blueviolet",
                                color: "white",
                                borderRadius: "50%",
                                height: "40px",
                                width: "40px",
                                position: "absolute",
                                top: "43%",
                                left: "16px",
                                cursor: "pointer",
                                textAlign: "center",
                                verticalAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <ArrowBackIcon style={{ color: "white", fontSize: "30px" }} />
                        </p>
                        <img
                            style={{
                                overflow: "hidden",
                                zIndex: "-300",
                                objectFit: "cover",
                                height: "320px",
                                borderRadius: "50%"
                            }}
                            src={users[index].img} alt="img" >

                        </img>
                        <p
                            onClick={handleRightClick}
                            style={{
                                backgroundColor: "blueviolet",
                                color: "white",
                                borderRadius: "50%",
                                height: "40px",
                                width: "40px",
                                position: "absolute",
                                top: "43%",
                                cursor: "pointer",
                                right: "16px",
                                textAlign: "center",
                                verticalAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}>
                            <ArrowForwardIcon style={{ color: "white", fontSize: "30px" }} />
                        </p>
                    </div>
                    <div style={{ margin: "20px 0px" }}>
                        <i style={{ color: "black", fontSize: "18px" }}>
                            {users[index].name}</i><br />
                        <i style={{ color: "grey", fontSize: "15px" }}>
                            {users[index].desc}</i><br />
                        <a href={users[index].linkedURL}>
                            <LinkedInIcon style={{ color: users[index].linkedURL ? "blue" : "black", fontSize: "50px" }} />
                        </a>
                    </div>
                </div>

            </div>
            <br /> <br /> <br /> <br /> <br />
        </div>
    )
}

export default Governance
