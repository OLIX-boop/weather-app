import { useEffect, useState } from 'react';
import ForecastElement from './forecast_element';
import { coords, weather_data, conversion } from '../../../interfaces';

const Forecast = ({coords}: {coords:coords}) => {
    const [Forecast, setForecast] = useState<weather_data>();

    useEffect(() => {
        const fetchData = async () => {
            const api = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
            const response = await fetch(api);
            const data = await response.json();
            setForecast(data);
        }
        fetchData()
    }, []);

    if (!Forecast) return <>
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
        <ForecastElement img={conversion[0].day}temp={24} day={"26 Jul, Thus"} />
    </>

    const { weather_code, temperature_2m_max, temperature_2m_min, time} = Forecast.daily;
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (<div className="white p-[2vh] rounded-[1vw] h-[100%]">
        <h1>Forecast</h1>
        <div className="h-[90%] pt-[2vh]">
            {weather_code.map((_, key) => <ForecastElement
                img={conversion[weather_code[key]].day}
                temp={Math.round( (temperature_2m_max[key] + temperature_2m_min[key]) /2 * 10 ) / 10}
                day={new Date(time[key]).toLocaleString('en-GB', { month: "short", day: "numeric"})+", "+days[new Date(time[key]).getDay()]}
                key={key}
            />)}
        </div>
    </div>)
}

export default Forecast;