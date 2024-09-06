"use client";
import DashboaradPanel from "./DashboaradPanel";

const DashboardLayout = () => {
  return (
    <div className="min-h-full bg-[#5c3b58] flex items-center justify-center flex-wrap gap-2">
      {/* <DashboaradPanel /> CandleStick Chart */}
      <DashboaradPanel
        chartType="line"
        endpoint={"line-chart-data"}
        title="Line Chart"
      />
      <DashboaradPanel
        chartType="bar"
        endpoint={"bar-chart-data"}
        title="Bar Chart"
      />
      <DashboaradPanel
        chartType="pie"
        endpoint={"pie-chart-data"}
        title="Pie Chart"
      />
      <DashboaradPanel
        chartType="candlestick"
        endpoint={"candlestick-data"}
        title="CandleStick Chart"
      />
    </div>
  );
};

export default DashboardLayout;
