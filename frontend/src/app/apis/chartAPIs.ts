import axios from "axios";

const CHART_BASE_URL = "http://localhost:8000/api/";

export const fetchChartData = async (endpoint: string) => {
  try {
    const response = await axios.get(`${CHART_BASE_URL}${endpoint}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
