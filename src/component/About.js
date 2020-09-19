import React, { useReducer, createContext, useContext } from 'react';
import MyContext from './context'
import Button from '@material-ui/core/Button';


export default function About() {


  return (
    <MyContext.Consumer>
      {(name) => {
        console.log(name)
        return (
          <div >
         
{name.state}

<Button variant="contained" onClick={()=> {name.state!=="ok" ? name.setRole("ok") :name.setRole("hassan")}} >Default</Button>

          </div>


        )
      }}

    </MyContext.Consumer>
  )

}
