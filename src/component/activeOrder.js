import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';



export default function ActiveOrder() {


    return (
        <div  >
            <div className="activeOrder">

                <div><span>Active Orders - 0 ($0)</span></div>
                <div><select name="cars" id="cars">
                    <option value="volvo">All Orders</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select></div>


            </div>
        </div>
    )

}
