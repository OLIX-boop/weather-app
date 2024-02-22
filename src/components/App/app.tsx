import Toolbar from "../utility/toolbar/Toolbar";
import Navbar from "../utility/navbar/navbar";
import CurrentWeather from "../dashboard/current_weather/currentWeather";
import PopularCities from "../dashboard/popular_cities/populasCities";
import Forecast from "../dashboard/forecast/forecast";
import ChartElement from "../chart/chart";
import Map from "../dashboard/map/map";

import { useGeolocated } from "react-geolocated";
import { useEffect, useState } from "react";
import { weather_data, coords } from '../../interfaces';
import { fetchData } from '../../fetch';

let updateCoords = true;
const App = () => {
    const [coordinates, setCoordinates] = useState<coords>(); 
    const [weatherData, setWeatherData] = useState({});

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
        positionOptions: {
            enableHighAccuracy: true,
        },
        userDecisionTimeout: 5000,
    });
    
    if (isGeolocationAvailable && isGeolocationEnabled && updateCoords && coords) {
        updateCoords = false;
        setCoordinates({ 
            latitude: coords?.latitude,
            longitude: coords?.longitude
        });
    } else if (!isGeolocationEnabled && updateCoords) {
        updateCoords = false;
        setCoordinates({ latitude: 45.464098, longitude: 9.191926});// Cordinate duomo milano
        // https://www.google.com/maps/search/?api=1&query=45.464098,9.191926
    }
    
    useEffect(() => {
        if (coordinates) 
            fetchData(
                `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=surface_pressure,temperature_2m,wind_speed_10m,weather_code,cloud_cover,relative_humidity_2m,is_day&hourly=temperature_2m&forecast_days=1`,
                setWeatherData
            );
    }, [coordinates]);

    const fetchCoords = async (value:string) => {
        const key = "65d5f608b845e962111973fipd13148";
        const api = `https://geocode.maps.co/search?q=${value}&api_key=${key}`;
        const response = await fetch(api);
        const data = await response.json();

        if (!data || data.length < 1) return;
        setCoordinates({latitude: data[0].lat, longitude: data[0].lon});
    };

    return (<>
        <div className="background grid max-h-[80vh] w-[70vw] z-10">
            <Toolbar />
            <div className="content rounded-r-xl py-[4vh] px-[2.4vw]">
                <Navbar fetchCoords={fetchCoords}/>
                <div className="dashboard-vertical-grid grid h-[calc(100%-4vh)]">
                    <div className="dashboard-grid1 grid my-[2vh]">
                    <CurrentWeather data={weatherData as weather_data}/>
                        {coordinates && <Map latitude={coordinates.latitude} longitude={coordinates.longitude}></Map>}                              
                        <PopularCities />                                   
                    </div>
                    <div className="dashboard-grid2 grid">
                        <Forecast coords={coordinates}/>     
                        {   
                            Object.keys(weatherData).length > 0 &&
                            <ChartElement data={weatherData as weather_data}/>
                        } 
                                       
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default App;