import { Day } from "../../../assets/animated/_icons";

const WeatherLoader = () => {
  return (
    <div className="blur dashboard-grid3 grid bg-color p-[2vh] rounded-[1vw]">
      <div className="">
        <h5 className="font-bold">Current Weather</h5>
        <p className="text-xs">19:30</p>
      </div>
      <div className="grid grid-cols-2">
        <img
          src={Day}
          className="h-[calc(90%-1vh)] my-auto"
          alt=""
        />

        <div className="grid dashboard-grid4">
          <div className="flex flex-col justify-center">
            <h1
              className="font-bold"
              style={{ fontSize: "clamp(1vw, 3.15vw, 3.15vw)" }}
            >
              19
            </h1>
            <h6 className="text-xs font-extralight mt-[-2vh]">
              Clear
            </h6>
          </div>
          <h6>°C</h6>
        </div>
      </div>
      <div className="flex justify-between mb-[-1.5vh]">
        <div className="flex flex-col justify-center">
          <i className="text-xl pb-[.5vh] fa-regular fa-moon"></i>
          <h6 className="text-xs font-extralight mx-auto">
            7PM
          </h6>
        </div>

        <div className="flex flex-col justify-center">
          <i className="text-xl pb-[.5vh] fa-solid fa-droplet"></i>
          <h6 className="text-xs font-extralight mx-auto">
            20%
          </h6>
        </div>

        <div className="flex flex-col justify-center">
          <i className="text-xl pb-[.5vh] fa-solid fa-wind flex justify-center"></i>
          <h6 className="text-xs font-extralight flex mx-auto">
            10 kh/m
          </h6>
        </div>

        <div className="flex flex-col justify-center">
          <i className="text-xl pb-[.5vh] fa-regular fa-sun"></i>
          <h6 className="text-xs font-extralight mx-auto">
            10 AM
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WeatherLoader;
