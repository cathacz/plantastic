import { useState, useEffect } from "react";
// require("dotenv").config({ path: __dirname + "../../../.env" });
// import { API_KEY } from "react-native-dotenv";
// import { API_KEY } from "@env";
import axios from "axios";
import { storeWeather, getWeather } from "./storeWeather";
import useGeoLocation from "./useGeoLocation";

// fetch api with axios
const url = "https://api.openweathermap.org/data/2.5";

const callAPI = axios.create({
  baseURL: url,
  timeout: 1000,
});

export default function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null);

  const latLon = useGeoLocation();
  const API_KEY = "bd8f9e0cb505371a3d94a11109b08394";

  console.log(API_KEY);

  useEffect(() => {
    if (latLon) {
      console.log(latLon);
      console.log(...latLon);

      fetchAPI(...latLon);
    }
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    console.log(lat);
    console.log(lon);

    try {
      const endpoint = `/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const res = await callAPI.get(endpoint);
      // console.log(endpoint);
      const data = await storeWeather(filterData(res.data));
      // console.log(data);
      setWeather(data);
    } catch (err) {
      console.log("API fetching failure");
      const data = await getWeather();
      setWeather(data);
    }
  };
  return weather;
}

const filterData = (rawData) => {
  return {
    id: rawData.city.id,
    name: rawData.city.name,
    country: rawData.city.country,
    timezone: rawData.city.timezone,
    coord: {
      lat: rawData.city.coord.lat,
      lon: rawData.city.coord.lon,
    },
    list: rawData.list,
  };
};
