import ChartElement from "react-apexcharts";
import { useState, useEffect } from "react";
import { weather_data } from "../../interfaces";


const Chart = ({ data }: { data: weather_data }) => {
  const [options, setOptions] = useState();

  useEffect(() => {
    const dates = [...data.hourly.time].map((e) => new Date(e).getTime());
    setOptions({
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          type: "datetime",
          categories: dates,
        },
        tooltip: {
          enabled: false,
        },
    });
  }, []);


  if (options)
    return (
      <div className="white ml-[1.5vw] p-[.5vh] rounded-[1vw] w-[calc(100%-1.5vw)] h-[100%]">
        <ChartElement
          options={options}
          series={[
            {
              name: "temp",
              data: data.hourly.temperature_2m,
            },
          ]}
          type="area"
          height="100%"
          width="100%"
        />
      </div>
    );
  else
    return (
      <div className="white ml-[1.5vw] p-[.5vh] rounded-[1vw] w-[calc(100%-1.5vw)] h-[100%]"></div>
    );
};

export default Chart;
