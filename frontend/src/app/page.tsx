import DashboaradPanel from "./_components/DashboaradPanel";

export default function Line() {
  return (
    <div className="min-h-full bg-[#5c3b58] flex items-center justify-center">
      <DashboaradPanel
        chartType="line"
        endpoint={"line-chart-data"}
        title="Line Chart"
      />
    </div>
  );
}
