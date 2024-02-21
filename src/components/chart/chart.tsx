//import ChartElement from "react-apexcharts";
//import { useState, useEffect } from "react";
import { weather_data } from "../../interfaces";

import { Line } from 'react-chartjs-2';
import { registerables, Chart } from "chart.js";
Chart.register(...registerables);

const ChartElement = ({ data }: { data: weather_data }) => { 

  const scaleMinValue = Math.min(...data.hourly.temperature_2m)-3;
  const scaleMaxValue = Math.max(...data.hourly.temperature_2m)+1;
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: scaleMinValue,
        max: scaleMaxValue,
      },
    },
  };
  
  const labels = [...data.hourly.time].map((e) => {
    const hours = new Date(e).getHours();
    if (hours+"".length < 2) return '0'+hours+':00';
    else return hours+':00'

  });

    const Data = {
      labels: labels,
      datasets: [
        {
          fill: true,
          label: 'Temperature',
          data: data.hourly.temperature_2m,
          borderColor: 'rgba(224, 241, 255,0.5)',
          backgroundColor: (context) => {
            const bgColor= [
              '#76dfe8',
              '#96bad9',
              '#96bad9',
              '#96bad9',
              '#96bad9',
              '#96bad9',
              'rgba(255,255,255,0.1)',
            ];
            if (!context.chart.chartArea) return;
            
            const { ctx, chartArea: {top, bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            const colorTranches = 1 / bgColor.length;

            for (let i = 0; i < bgColor.length; i++) 
              gradientBg.addColorStop(0 + i * colorTranches, bgColor[i])
            
  
            return gradientBg;
          },
        },
      ],
    }

    return (
      <div className="white ml-[1vw] rounded-[1vw] w-[calc(100%-1vw)] h-[100%]">
        <Line options={options} data={Data} redraw={true} />
      </div>
    );
};

export default ChartElement;
