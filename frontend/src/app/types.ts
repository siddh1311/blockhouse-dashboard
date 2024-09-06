type ChartData = {
  labels: string[];
  data: number[];
};

type CandleStickDataPoint = {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
};

type CandleStickData = {
  data: CandleStickDataPoint[];
};

type UseChartDataResult = {
  data: any;
  error: string | null;
  loading: boolean;
};
