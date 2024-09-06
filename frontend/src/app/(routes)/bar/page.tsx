import DashboaradPanel from "@/app/_components/DashboaradPanel";

export default function Bar() {
  return (
    <div className="min-h-full bg-[#5c3b58] flex items-center justify-center">
      <DashboaradPanel
        chartType="bar"
        endpoint={"bar-chart-data"}
        title="Bar Chart"
      />
    </div>
  );
}
