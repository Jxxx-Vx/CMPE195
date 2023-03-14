import axios from "axios";

export const usgs = async (req, res) => {
    try {
    const response = await axios.get("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-09&limit=3&orderby=time").then((response) => {
      console.log("USGS API CALL", response.data); 
    });

    res.json(response.data);
  } catch (err) {
    console.log("Alert Error: ", err);
  }
};
  
export const nws = async (res) => {};
  