import { useEffect, useState } from 'react';
import { weather_data, conversion } from '../../../interfaces';
import WeatherLoader from './loader';

const CurrentWeather = ({ data }: {data:weather_data}) => {

    const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    if (Object.keys(data).length === 0) return <WeatherLoader/>;

    return (<div className="dashboard-grid3 grid bg-color p-[2vh] rounded-[1vw]">
        <div className="">
            <h5 className="font-bold">Current Weather</h5>
            <p className="text-xs">{time}</p>
        </div>
        <div className="grid grid-cols-2">
            <img src={data.current.is_day ? conversion[data.current.weather_code].day : conversion[data.current.weather_code].night} className='h-[calc(90%-1vh)] my-auto' alt="" />

            <div className="grid dashboard-grid4">
                <div className="flex flex-col justify-center">
                    <h1 className='font-bold' style={{fontSize: "clamp(1vw, 3.15vw, 3.15vw)"}}>{Math.round( data.current.temperature_2m * 10 ) / 10}</h1>
                    <h6 className='text-xs font-extralight mt-[-2vh]'>{conversion[data.current.weather_code].desc}</h6>
                </div>
                <h6>°C</h6>
            </div>
        </div>
        <div className="flex justify-between mb-[-1.5vh]">
            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-cloud"></i>
                <h6 className='text-xs font-extralight mx-auto'>{data.current.cloud_cover}%</h6>
            </div>
      
            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-droplet"></i>
                <h6 className='text-xs font-extralight mx-auto'>{data.current.relative_humidity_2m}%</h6>
            </div>

            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-wind flex justify-center"></i>
                <h6 className='text-xs font-extralight flex mx-auto'>{data.current.wind_speed_10m} kh/m</h6>
            </div>

            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-arrow-down flex justify-center"></i>
                <h6 className='text-xs font-extralight mx-auto'>{data.current.surface_pressure}Pa</h6>
            </div>
        </div>
    </div>)
}

export default CurrentWeather;