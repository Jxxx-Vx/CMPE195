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

export const nws = async (req, res) => {
    const{area} = req.body;
    try {
      const response = await axios
        .get(
          `https://api.weather.gov/alerts/active?status=actual&message_type=alert&limit=20&area=${area}`
        )
        .then((response) => {
          res.json(response.data);
        });
    } catch (err) {
      console.log("Alert Error: ", err);
    }
  };

