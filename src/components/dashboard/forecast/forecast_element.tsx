const ForecastElement = ({img, temp, day}: {img:string, temp:number, day: string}) => {


  return (
    <div className="flex justify-between max-h-[15%]">
      <div className="flex h-[100%]">
        <img src={img} className="h-[2vw] w-auto" alt="Weather img" />
        <div className="flex justify-center items-center pl-[.5vw]">
          <p className="text-end pl-[.2vw]">{temp}°</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p>{day}</p>
      </div>
    </div>
  );
};

export default ForecastElement;
