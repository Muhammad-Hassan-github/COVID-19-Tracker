import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';



export default function StepsTopSeller() {


    return (

<div className="stepsTopSeller" >
            <div className="header">
                <div className="Top">
                    <h3>Take these steps to become a top seller on Fiverr</h3>
                </div>
            </div>
            <div className="steps">
                <div className="first">
                    <h4>Get noticed</h4>
                    <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact.</p>
                    <button>Share your Gigs</button>
                </div>
                <div className="first">
                    <h4>Get noticed</h4>
                    <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact.</p>
                    <button>Share your Gigs</button>
                </div>  <div className="first">
                    <h4>Get noticed</h4>
                    <p>Tap into the power of social media by sharing your Gig, and get expert help to grow your impact.</p>
                    <button>Share your Gigs</button>
                </div>

            </div>
        </div>
    )

}
