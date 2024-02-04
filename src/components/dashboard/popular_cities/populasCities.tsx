import City from "./city";

const PopularCities = () => {

    return(
        <div className="white rounded-[1vw] px-[1.2vw] py-[1vw]">
            <h1 className="font-bold">Popular Cities</h1>
            <City city="Milan" icon="fa-regular fa-moon" weather="Cloudy"/>
            <City city="Milan" icon="fa-regular fa-moon" weather="Cloudy"/>
            <City city="Milan" icon="fa-regular fa-moon" weather="Cloudy"/>
            <City city="Milan" icon="fa-regular fa-moon" weather="Cloudy"/>
            <City city="Milan" icon="fa-regular fa-moon" weather="Cloudy"/>
        </div>
    )
}

export default PopularCities;