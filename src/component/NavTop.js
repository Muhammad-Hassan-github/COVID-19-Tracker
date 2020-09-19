import React, { useReducer, createContext, useContext, Consumer, useState } from 'react';
import '../App.css';
import logo from '../images/fiverr.png';
import user from '../images/user.png';
import MyContext from './context'
import AnimatedNumber from "animated-number-react";


export default function NavTop() {

  let formatValue = (value) => value.toFixed(0);
  return (

    <MyContext.Consumer>
      {(props) => {


        return (
          <>



            <div className="Main-Contariner">
              <div className="Header">
                <div className="cofirmed-Container" >

                  <h2><AnimatedNumber
                    value={props.state.confirmed}
                    formatValue={formatValue}
                  /></h2>
                  <h2>Confirmed</h2>
                </div>
                <div className="active-Container" >

                  <h2><AnimatedNumber
                    value={props.state.active}
                    formatValue={formatValue}
                  /></h2>
                  <h2>Active</h2>
                </div>
                <div className="recovered-Container" >
                  <h2><AnimatedNumber
                    value={props.state.recovered}
                    formatValue={formatValue}
                  /></h2>
                  <h2 >Recovered</h2>
                </div>
                <div className="deaths-Container" >
                  <h2><AnimatedNumber
                    value={props.state.deaths}
                    formatValue={formatValue}
                  /></h2>
                  <h2 >Deaths</h2>
                </div>
              </div>
            </div>

          </>


        )
      }}

    </MyContext.Consumer >


  )

}
