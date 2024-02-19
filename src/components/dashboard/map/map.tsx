
const Map = ({latitude, longitude}: {latitude: number, longitude: number}) => {
    return (<div className="px-[1vw]">
        <iframe className="w-full h-full rounded-[1vw] " src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=14&output=embed`}>
        </iframe>
    </div>)
}

export default Map; 