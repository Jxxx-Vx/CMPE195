export const usgs = async (res) => {
  await fetch(
    "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-09&limit=3&orderby=time"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("USGS API CALL", data);
      return res.json(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const nws = async (res) => {};
