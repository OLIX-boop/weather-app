



const City = ({city, icon, weather}: {city:string, icon:string, weather:string}) => {

    return(
            <div className="pt-[.5vh] flex justify-between">
                <div className="flex justify-center">
                    <i className={icon + " " +"text-xl"}></i>
                    <h5 className="pl-[.8vw] pt-[.1vw]">{city}</h5>
                </div>
                <p className="font-thin text-s">{weather}</p>
            </div>
    )
}

export default City;