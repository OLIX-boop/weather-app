import Toolbar from "../toolbar/Toolbar";
import Navbar from "../navbar/navbar";

import { useGeolocated } from "react-geolocated";

const App = () => {
    let coordinates = { latitude: 45.464098, longitude: 9.191926};
    

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

    console.log(coordinates)

    return (<>
        <div className="background h-[78vh] w-[86.5vw]">
            <Toolbar />
            <div className="content rounded-r-xl p-[4vh]">
                <Navbar/>
                <div className="grid grid-rows-2">
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    </>)

}


export default App;