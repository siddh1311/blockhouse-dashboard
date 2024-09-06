"use client";
import { useEffect, useState } from "react";
import { fetchChartData } from "../apis/chartAPIs";

const useChartData = (endpoint: string): UseChartDataResult => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    fetchChartData(endpoint)
      .then((response) => {
        if (isMounted) {
          setData(response);
          setError(null);
        }
      })
      .catch((error) => {
        if (isMounted) {
          setError("Failed to fetch data.");
          setData(null);
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });
  }, [endpoint]);

  return { data, error, loading };
};
export default useChartData;
