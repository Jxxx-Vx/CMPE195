import axios from "axios";

export const getUSGS = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/usgs`, user);

export const getNWS = async (user) =>
  await axios.post(`${process.env.REACT_APP_API}/nws`, user);
