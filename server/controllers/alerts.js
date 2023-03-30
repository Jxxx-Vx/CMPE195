import axios from "axios";

export const usgs = async (req, res) => {
  const r = req.body;
  try {
    const response = await axios
      .get(
        "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-09&limit=12&orderby=time"
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (err) {
    console.log("Alert Error: ", err);
  }
};

export const nws = async (res) => {};
