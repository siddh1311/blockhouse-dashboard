"use client";
import { Bar, Line, Pie, Chart } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale } from "chart.js/auto";

import { Chart as GoogleChart } from "react-google-charts";

import {
  CandlestickController,
  OhlcController,
  CandlestickElement,
  OhlcElement,
} from "chartjs-chart-financial";
import useChartData from "../hooks/useChartData";
import LoadingSkeleton from "./LoadingSkeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  CandlestickElement,
  CandlestickController,
  OhlcController,
  OhlcElement
);

interface DashboardPanelProps {
  chartType: "line" | "bar" | "pie" | "candlestick";
  endpoint: string;
  title: string;
}

const DashboaradPanel = ({
  chartType,
  endpoint,
  title,
}: DashboardPanelProps) => {
  const { data, error, loading } = useChartData(endpoint);

  const renderChart = () => {
    if (error) {
      return <p className="text-red-500 font-semibold">{error}</p>;
    }

    if (loading || !data) {
      return <LoadingSkeleton />;
    }

    switch (chartType) {
      case "line":
        return <Line data={data} />;
      case "bar":
        return <Bar data={data} />;
      case "pie":
        return (
          <div className="w-[608px] h-[304px]">
            <Pie data={data} options={{ maintainAspectRatio: false }} />
          </div>
        );
      case "candlestick":
        const candleStickData = data.data;
        const formattedData = [
          ["Date", "Low", "Open", "Close", "High"],
          ...candleStickData.map((item: any) => [
            new Date(item.x),
            item.low,
            item.open,
            item.close,
            item.high,
          ]),
        ];

        const candlestickChartOptions = {
          legend: { position: "none" },
          hAxis: {
            format: "yyyy-mm-dd",
          },
          vAxis: {
            title: "Price",
          },
        };

        console.log(formattedData);
        return (
          <GoogleChart
            chartType="CandlestickChart"
            data={formattedData}
            options={candlestickChartOptions}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow-md w-full max-w-[40rem]">
      <h2 className="text-md font-semibold mb-2">{title}</h2>
      <div className="relative h-full w-full">{renderChart()}</div>
    </div>
  );
};

export default DashboaradPanel;
