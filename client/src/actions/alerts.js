import axios from "axios";

export const getUSGS = async () =>
  await axios.post(`${process.env.REACT_APP_API}/usgs`);

export const getNWS = async () =>
  await axios.post(`${process.env.REACT_APP_API}/nws`);
