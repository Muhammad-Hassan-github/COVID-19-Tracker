import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';



export default function SideBar() {


    return (
        <div  >
            <div className="sideBar">
                <span className="onlineIcon">  Online</span>
                <div style={{ textAlign: "center" }}>
                    <img src={user} alt="logo" />
                    <span>Muhammad Hassan</span>
                    <hr width="80%" color='#62646a' style={{ marginTop: 30 }}></hr>
                </div>
                
                <div style={{width:"80%", margin:"0 auto"}}>
                    <div style={{ margin:15, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span>Response in Rate</span></div><div style={{float:"right"}}><progress value="20" color="black" max="40"  /> </div><div><span>100%</span></div>
                    </div>
                    <div style={{margin:15, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span>Delivered on Time</span></div><div style={{float:"right"}}><progress value="20" color="black" max="40"  /> </div><div><span>100%</span></div>
                    </div>

                    <div style={{ margin:15,display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span>Order Completion</span></div><div style={{float:"right"}}><progress value="80" color="black" max="100"/></div><div><span>100%</span></div>
                    </div>
                    <hr width="100%" color='#62646a' style={{ marginTop: 30 }}></hr>
                </div>

                <div style={{width:"80%", margin:"0 auto"}}>
                    <div style={{ margin:15, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span>Earnned in September</span></div><div><span>0%</span></div>
                    </div>
                    <div style={{margin:15, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div><span>Response Time</span></div><div><span>N/A</span></div>
                    </div>
                </div>
            </div>
        </div>
    )

}
