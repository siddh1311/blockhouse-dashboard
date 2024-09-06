import DashboaradPanel from "@/app/_components/DashboaradPanel";

export default function CandleStick() {
  return (
    <div className="min-h-full bg-[#5c3b58] flex items-center justify-center">
      <DashboaradPanel
        chartType="candlestick"
        endpoint={"candlestick-data"}
        title="CandleStick Chart"
      />
    </div>
  );
}
