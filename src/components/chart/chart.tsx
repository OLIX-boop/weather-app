//import { useState, useEffect } from "react";
import { weather_data } from "../../interfaces";

import { Line } from "react-chartjs-2";
import { registerables, Chart } from "chart.js";
import { color } from "chart.js/helpers";
Chart.register(...registerables);

interface context {
  chart: {
    ctx: {
      createLinearGradient: (
        a: number,
        b: number,
        c: number,
        d: number
      ) => CanvasGradient;
      addColorStop: (a: number, b: string) => void;
    };
    chartArea: { top: number; bottom: number };
  };
}

const ChartElement = ({ data }: { data: weather_data }) => {
  const scaleMinValue = Math.min(...data.hourly.temperature_2m) - 1;
  const scaleMaxValue = Math.max(...data.hourly.temperature_2m) + 1;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        align: "start",
        onClick: () => "",
        labels: {
          color: "rgb(255, 255, 255)",
          boxWidth: 0,
          font: {
            family: "DM Sans",
            size: 19,
          },
        },
      },
      tooltip: {
        callbacks: {
          beforeTitle: () => "Temperature",
        }
      }
    },
    scales: {
      x: {
        display: true,
        grid: {
          display:false,
        },
        ticks: {
          color: "rgb(255,255,255)"
        }
      },
      y: {
        display: false,
        min: scaleMinValue,
        max: scaleMaxValue,
      },
    },
  };

  const labels = [...data.hourly.time].map((e) => {
    const index  = data.hourly.time.indexOf(e);
    if (index % 2 !== 0 || index === 0) return "";
    const hours = new Date(e).getHours();
    if (hours + "".length < 2) return "0" + hours + ":00";
    else return hours + ":00";
  });

  const Data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        label: "Temperature",
        data: data.hourly.temperature_2m,
        tension: 0.5,
        borderColor: "rgba(224, 241, 255,0.5)",
        backgroundColor: (context: context) => {
          const bgColor = [
            "rgba(86, 160, 238, 0.7)",
            "rgba(86, 160, 238, 0.4)",
            "rgba(86, 160, 238, 0.1)",
          ];
          if (!context.chart.chartArea) return;

          const {
            ctx,
            chartArea: { top, bottom },
          } = context.chart;
          const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);

          gradientBg.addColorStop(0, bgColor[0]);
          gradientBg.addColorStop(0.5, bgColor[1]);
          gradientBg.addColorStop(1, bgColor[2]);
          return gradientBg;
        },
      },
    ],
  };

  return (
    <div className="bg-color ml-[1vw] pr-[1vh] pb-[.5vh] pt-[1vh] rounded-[1vw] w-[calc(100%-1vw)] h-[100%]">
      <Line options={options} data={Data} redraw={true} />
    </div>
  );
};

export default ChartElement;
