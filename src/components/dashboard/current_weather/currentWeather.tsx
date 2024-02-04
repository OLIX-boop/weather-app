import     { CloudyDay1, CloudyNight1, Cloudy, Day, Night, Rainy1, Rainy5, Snowy1, Snowy5, Thunder }  from '../../../assets/animated/_icons';
import { useEffect, useState } from 'react';

const tempdata = {

    lat: 45.4641,
  
    lon: 9.1919,
  
    timezone: 'Europe/Rome',
  
    timezone_offset: 3600,
  
    current: {
  
      dt: 1706992308,
  
      sunrise: 1706942565,
  
      sunset: 1706977869,
  
      temp: 10.12,
  
      feels_like: 9.25,
  
      pressure: 1024,
  
      humidity: 79,
  
      dew_point: 6.65,
  
      uvi: 0,
  
      clouds: 0,
  
      visibility: 10000,
  
      wind_speed: 2.57,
  
      wind_deg: 270,
  
      weather: [ { id: 800, main: 'Clear', description: 'clear sky', icon: '01n' } ]
  
    },
  
    alerts: [
  
      {
  
        sender_name: 'Italian Air Force National Meteorological Service',
  
        event: 'Yellow Fog Warning',
  
        start: 1706983200,
  
        end: 1707033540,
  
        description: 'Moderate intensity weather phenomena expected Plain\n' +
  
          ' (DISCLAIMER: "Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service https://www.protezionecivile.gov.it")',
  
        tags: [ 'Fog' ]
  
      },
  
      {
  
        sender_name: 'Italian Air Force National Meteorological Service',
  
        event: 'Yellow Fog Warning',
  
        start: 1707069600,
  
        end: 1707091140,
  
        description: 'Moderate intensity weather phenomena expected Plain\n' +
  
          ' (DISCLAIMER: "Information provided on METEOALARM for Italy regard only the intensity and recurrence of the phenomena, further details can be found at www.meteoam.it. METEOALARM information do not provide the assessment of impact on the territory and they do not represent the Official Alerts messages that are issued by the National Civil Protection Service https://www.protezionecivile.gov.it")',
  
        tags: [ 'Fog' ]
  
      }
  
    ]
  
  }


const conversion: {[key:string]: string} = {
    '01d': Day,
    '01n': Night,
    '02d': CloudyDay1,
    '02n': CloudyNight1,
    '03d': Cloudy,
    '03n': Cloudy,
    '04d': Cloudy,
    '04n': Cloudy,
    '09d': Rainy5,
    '09n': Rainy5,
    '10d': Rainy1,
    '10n': Rainy1,
    '11d': Thunder,
    '11n': Thunder,
    '13d': Snowy1,
    '13n': Snowy5,
    '50n': Cloudy,
    '50d': Cloudy,
}

const CurrentWeather = ({ data }: {data:object }) => {

    const [time, setTime] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(`${new Date().getHours()}:${new Date().getMinutes()}`);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    console.log(tempdata)


    return (<div className="dashboard-grid3 grid bg-color p-[2vh] rounded-[1vw]">
        <div className="">
            <h5 className="font-bold">Current Weather</h5>
            <p className="text-xs">{time}</p>
        </div>
        <div className="grid grid-cols-2">
            <img src={conversion[tempdata.current.weather[0].icon]} className='h-[calc(90%-1vh)] my-auto' alt="" />

            <div className="grid dashboard-grid4">
                <div className="flex flex-col justify-center">
                    <h1 className='font-bold' style={{fontSize: "clamp(1vw, 3.15vw, 3.15vw)"}}>{Math.round( tempdata.current.temp * 10 ) / 10}</h1>
                    <h6 className='text-xs font-extralight mt-[-2vh]'>{tempdata.current.weather[0].main}</h6>
                </div>
                <h6>°C</h6>
            </div>
        </div>
        <div className="flex justify-between mb-[-1.5vh]">
            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-regular fa-moon"></i>
                <h6 className='text-xs font-extralight mx-auto'>{new Date(tempdata.current.sunset).getHours()}PM</h6>
            </div>

            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-droplet"></i>
                <h6 className='text-xs font-extralight mx-auto'>{tempdata.current.humidity}%</h6>
            </div>

            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-solid fa-wind flex justify-center"></i>
                <h6 className='text-xs font-extralight flex mx-auto'>{tempdata.current.wind_speed} kh/m</h6>
            </div>

            <div className="flex flex-col justify-center">
                <i className="text-xl pb-[.5vh] fa-regular fa-sun"></i>
                <h6 className='text-xs font-extralight mx-auto'>{new Date(tempdata.current.sunrise).getHours()}AM</h6>
            </div>
        </div>
    </div>)
}

export default CurrentWeather;