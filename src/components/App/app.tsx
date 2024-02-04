import Toolbar from "../utility/toolbar/Toolbar";
import Navbar from "../utility/navbar/navbar";
import CurrentWeather from "../dashboard/current_weather/currentWeather";
import PopularCities from "../dashboard/popular_cities/populasCities";
import Forecast from "../dashboard/forecast/forecast";

import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";

const apiKey = 'aced08b6dec57d16430925ce02d13539';
let loadedOnce = false;

const rand = (min:number, max:number):number => Math.floor(Math.random() * (max - min) + min);

const initialclouds = (n:number) => {
    const clouds = [{left: `${rand(10,20)}%`, top: `${rand(1,100)}%`, animation: `move ${rand(60, 100)}s infinite`}];
    for (let index = 0; index < n; index++) clouds.push({left: `${rand(10,20)}%`, top: `${rand(1,100)}%`, animation: `move ${rand(60, 100)}s infinite`});
    return clouds;
}

const App = () => {
    let coordinates = { latitude: 45.464098, longitude: 9.191926}; // default coordinates

    const [weatherData, setWeatherData] = useState({});

    const [clouds, setClouds] = useState(initialclouds(7));

    useEffect(() => {
        const interval = setInterval(() => {
            setClouds([...clouds, {left: `${rand(10,20)}%`, top: `${rand(1,100)}%`, animation: `move ${rand(60, 100)}s infinite`}]);
        }, 2000);
        return () => clearInterval(interval);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setClouds([...clouds.slice(1)])
        }, 1000*100);
        return () => clearInterval(interval);
    });


    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });


    if (isGeolocationAvailable && isGeolocationEnabled) 
        coordinates = { 
            latitude: coords?.latitude || 45.464098,
            longitude: coords?.longitude || 9.191926
        };

    useEffect(() => {
        if (loadedOnce) return;

        const fetchData = async () => {

            const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${apiKey}&units=metric`)

            const data = await response.json();
            console.log(data);
            setWeatherData(data);
        }
        //fetchData()

        loadedOnce = true;
    });


    return (<>
        <div className="background grid h-[80vh] w-[70vw] z-10">
            <Toolbar />
            <div className="content rounded-r-xl py-[4vh] px-[2.4vw]">
                <Navbar/>
                <div className="dashboard-vertical-grid grid h-[calc(100%-4vh)]">
                    <div className="dashboard-grid1 grid my-[2vh]">
                        <CurrentWeather data={weatherData}/>
                        <h1>CIAO</h1>                                    
                        <PopularCities />                                   
                    </div>
                    <div className="dashboard-grid2 grid bg-black">
                        <Forecast/>      
                        <h1>CIAO</h1>                
                    </div>
                </div>
            </div>
        </div>

        <div className="center">
            {clouds.map(e => <div key={clouds.indexOf(e)} className={`cloud`} style={e}></div>)}
        </div>
    </>)

}


export default App;