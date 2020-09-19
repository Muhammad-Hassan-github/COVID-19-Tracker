import React, { useState } from 'react';
import { Bar, Line, Scatter, Polar } from 'react-chartjs-2';
import MyContext from './context'



export default function Covid_Chart() {




  return (
    <MyContext.Consumer>
      {(props) => {


        const data = {
          datasets: [{
            data: [
              props.state.confirmed,
              props.state.active,
              props.state.recovered,
              props.state.deaths,

            ],
            backgroundColor: [
              '#FF6384',
              '#4BC0C0',
              '#FFCE56',
              '#36A2EB'
            ],

          }],
          labels: [
            'Confirmed',
            'Active',
            'Recovered',
            'Deaths'
          ]
        };
        let formatValue = (value) => value.toFixed(2);
        return (

          <div >
           
            {/* <h2>Covid-19</h2> */}
            <div className="chart-main-contariner">
              <Polar data={data} style={{ backgroundColor: "red" }} />
            </div>
            
          </div>




        )
      }}

    </MyContext.Consumer >
  );
}