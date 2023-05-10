import axios from "axios";

export const usgs = async (req, res) => {

  
  const{lng, lat} = req.body;

  //https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&latitude=37.7749&longitude=-122.4194&maxradiuskm=100

  try {
    const response = await axios
      .get(
        `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-09&limit=12&orderby=time&&latitude=${lat}&longitude=${lng}&maxradiuskm=100`
      )
      .then((response) => {
        res.json(response.data);
      });
  } catch (err) {
    console.log("Alert Error: ", err);
  }
};

export const nws = async (req, res) => {
  
  const{lng, lat} = req.body;

    try {
      const response = await axios
        .get(
          `https://api.weather.gov/alerts/active?limit=20&point=${lat},${lng}`
        )
        .then((response) => {
          res.json(response.data);
        });
    } catch (err) {
      console.log("Alert Error: ", err);
    }
  };

