



const City = ({city, icon, weather}: {city:string, icon:string, weather:string}) => {

    return(
            <div className="pt-[.5vh] flex justify-between">
                <div className="flex justify-center">
                    <img src={icon} className="max-h-[3.6vh]" alt="Weather" />
                    <h5 className="pl-[.8vw] pt-[.1vw]">{city}</h5>
                </div>
                <p className="font-thin text-s">{weather}</p>
            </div>
    )
}

export default City;