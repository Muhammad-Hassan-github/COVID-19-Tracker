import React, {
  useReducer,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import "./App.css";
import Content from "./component/content";

import MyContext from "./component/context";
import items from "./reducers/Items";
import name from "./reducers/Name";
// import HomePage from './component/HomePage'
import NavTop from "./component/NavTop";
import Chart from "./component/covidChart";
import DrawerLeft from "./component/left_Drawer";
// import iState from './state'
import { Lines } from "react-preloaders";

const axios = require("axios");

function App() {
  useEffect(async () => {
    await axios
      .get("https://api.thevirustracker.com/free-api?countryTotals=ALL")
      .then(function (response) {
        setLoading(false);
        // handle success
        console.log(response);
        // globalData=response.data
        setCityData(response.data.countryitems[0]);

        let newAry = [];
        let newObj = [...Object.keys(response.data.countryitems[0])];
        newObj.pop();

        newObj.forEach((element, index) => {
          newAry.push(response.data.countryitems[0][element].title);
          // console.log(response.data.countryitems[0][element].title)
        });

        console.log(newAry);
        setCityName(newAry);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });


      let date = new Date();
      let year = date.getFullYear();
      let month = (1 + date.getMonth()).toString().padStart(2, "0");
      let day = date.getDate().toString().padStart(2, "0");
      let NewDay = day.replace(/['"]+/g, '')-1;
      let NewMonth =  month.replace(/['"]+/g, '')
     

    await axios
      .get(`https://covid-api.com/api/reports/total?date=${year}-${NewMonth}-${NewDay}`)
      .then(function (response) {
        console.log(response)
        setTimeout(() => {
          setGlobalData(response.data.data);
          setRecovered(response.data.data.recovered);
          setDeaths(response.data.data.deaths);
          setConfirmed(response.data.data.confirmed);
          setActive(response.data.data.active);
        }, 500);
      
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const [globalData, setGlobalData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();
  const [active, setActive] = useState();
  const [recovered, setRecovered] = useState();
  const [loading, setLoading] = useState(true);
  const [dataCity, setDataCity] = useState("Gloable");

 

  return (
    <MyContext.Provider
      value={{
        state: {
          cityData,
          globalData,
          confirmed,
          active,
          deaths,
          recovered,
          cityName,
          dataCity,
        },
        setCityData: setCityData,
        setActive: setActive,
        setConfirmed: setConfirmed,
        setDeaths: setDeaths,
        setRecovered: setRecovered,
        setCityName: setCityName,
        setLoading: setLoading,
        setDataCity: setDataCity,
      }}
    >
      <div>
        <DrawerLeft />
      </div>

      <Lines animation="slide-left" customLoading={loading} />
    </MyContext.Provider>
  );
}

export default App;
