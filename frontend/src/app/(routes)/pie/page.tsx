import DashboaradPanel from "@/app/_components/DashboaradPanel";

export default function Line() {
  return (
    <div className="min-h-full bg-[#5c3b58] flex items-center justify-center">
      <DashboaradPanel
        chartType="pie"
        endpoint={"pie-chart-data"}
        title="Pie Chart"
      />
    </div>
  );
}
