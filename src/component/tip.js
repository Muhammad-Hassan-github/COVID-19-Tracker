import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';

export default function Tip() {

    return (
        <div className="tip">
            <div className="first">
                <h4>Tip #1: Business brings business</h4>
                <span>Every order counts! The more orders you get, the more successful you’ll become.</span>
            </div>
            <div className="second">
                <h4>Tip #1: Business brings business</h4>
                {/* <span>Every order counts! The more orders you get, the more successful you’ll become.</span> */}
            </div>
        </div>
    )

}
