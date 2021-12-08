import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";
import TodaysDate from "../Calendar/TodaysDate";
import NumberToMonth from "../NumberToMonth";
import Card from "../../components/WeatherAPI/Card";

const DetailedWeather = ({ forecast: { name, list, timezone } }) => {
  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year
  //   // var hours = new Date().getHours(); //Current Hours
  //   // var min = new Date().getMinutes(); //Current Minutes
  //   // var sec = new Date().getSeconds(); //Current Seconds
  //   setCurrentDate(
  //     date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
  //   );
  // }, []);
  const currentWeather = list.filter((day) => {
    const now = new Date().getTime() + Math.abs(timezone * 1000);
    const currentDate = new Date(day.dt * 1000);
    return isSameDay(now, currentDate);
  });

  const daysByHour = list.map((day) => {
    const dt = new Date(day.dt * 1000);
    return {
      date: dt,
      hour: dt.getHours(),
      name: format(dt, "EEEE"),
      temp: Math.round(day.main.temp),
      icon: imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
    };
  });
  return (
    currentWeather.length > 0 && (
      <View style={styles.wrapper}>
        <Text style={styles.location}>{name}</Text>
        <View style={styles.date}>
          <NumberToMonth />
        </View>
        <View style={styles.rowTempIcon}>
          <Text style={styles.temp}>
            {Math.round(currentWeather[0].main.temp)}°C
          </Text>
          <Image
            style={styles.image}
            source={
              imageDictionary[currentWeather[0].weather[0].icon] ||
              imageDictionary["02d"]
            }
          />
        </View>

        <Text style={styles.description}>
          {currentWeather[0].weather[0].description}
        </Text>
        {/* <Card key={index} /> */}
      </View>
    )
  );
};
const styles = StyleSheet.create({
  styledContainer: {
    backgroundColor: "#272343",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  wrapper: {
    // borderColor: "pink",
    // borderWidth: 2,
    // borderStyle: "solid",
    flex: 1,
    width: "100%",
    textAlign: "center",
    // marginLeft: "0%",
  },
  location: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 10,
    marginRight: 13,
  },
  date: { alignSelf: "center", marginRight: 13 },
  rowTempIcon: {
    margin: 5,
    marginRight: 13,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  temp: { fontSize: 40, alignSelf: "center" },
  image: { width: 40, height: 40, marginLeft: 10 },

  description: { alignSelf: "center", marginRight: 13 },
});
export default DetailedWeather;
