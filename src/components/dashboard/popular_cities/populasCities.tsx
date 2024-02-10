import { useEffect, useState } from "react";
import City from "./city";
import { conversion, weather_data } from "../../../interfaces";
import { fetchData } from "../../../fetch";

const PopularCities = () => {
    const [CitiesData, setCitiesData] = useState<weather_data[]>();
    
    useEffect(() => {
        fetchData(
            "https://api.open-meteo.com/v1/forecast?latitude=45.4643,51.5085,40.4165,40.7143,48.8534&longitude=9.1895,-0.1257,-3.7026,-74.006,2.3488&current=weather_code,is_day&forecast_days=1",
            setCitiesData
        )
    }, []);

    const cities = [ "Milan", "London", "Madrid", "New York", "Paris"]

    return(
        <div className="white rounded-[1vw] px-[1.2vw] py-[1vw]">
            <h1 className="font-bold">Popular Cities</h1>
            {CitiesData && cities.map((value, key) => 
                <City 
                    key={key}
                    city={value} 
                    icon={conversion[CitiesData[key].current.weather_code][CitiesData[key].current.is_day ? "day" : "night"]}
                    weather={conversion[CitiesData[key].current.weather_code].desc}
                />
            )}
        </div>
    )
}

export default PopularCities;