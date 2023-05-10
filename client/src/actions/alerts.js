import axios from "axios";

export const getUSGS = async (location) =>
  await axios.post(`http://localhost:8000/api/usgs`, location);

export const getNWS = async (area) =>
  await axios.post(`http://localhost:8000/api/nws`, area);
