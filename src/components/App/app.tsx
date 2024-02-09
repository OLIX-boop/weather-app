import Toolbar from "../utility/toolbar/Toolbar";
import Navbar from "../utility/navbar/navbar";
import CurrentWeather from "../dashboard/current_weather/currentWeather";
import PopularCities from "../dashboard/popular_cities/populasCities";
import Forecast from "../dashboard/forecast/forecast";

import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";
import { weather_data } from '../../interfaces';

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
        const interval = setInterval(() => {
            const time =rand(60, 100);
            const index = clouds.length;
            setClouds([...clouds, {left: `${rand(10,20)}%`, top: `${rand(1,100)}%`, animation: `move ${time}s infinite`}]);
            setTimeout(() => {
                clouds.splice(index, 1);
            }, time);
        }, 2000);

        const fetchData = async () => {
            const api = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=surface_pressure,temperature_2m,wind_speed_10m,weather_code,cloud_cover,relative_humidity_2m,is_day`
            
            const response = await fetch(api);
            const data = await response.json();
            setWeatherData(data);
        }
        fetchData();

        return () => clearInterval(interval);
    }, []);


    return (<>
        <div className="background grid max-h-[80vh] w-[70vw] z-10">
            <Toolbar />
            <div className="content rounded-r-xl py-[4vh] px-[2.4vw]">
                <Navbar/>
                <div className="dashboard-vertical-grid grid h-[calc(100%-4vh)]">
                    <div className="dashboard-grid1 grid my-[2vh]">
                    <CurrentWeather data={weatherData as weather_data}/>
                        <h1>CIAO</h1>                                    
                        <PopularCities />                                   
                    </div>
                    <div className="dashboard-grid2 grid">
                        <Forecast coords={coordinates}/>      
                        <h1>CIAO</h1>                
                    </div>
                </div>
            </div>
        </div>

        <div className="center">
            {/*clouds.map(e => <div key={clouds.indexOf(e)} className={`cloud`} style={e}></div>)*/}
        </div>
    </>)

}


export default App;