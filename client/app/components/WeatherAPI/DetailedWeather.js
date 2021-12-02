import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";
import NumberToMonth from "../NumberToMonth";

export default function DetailedWeather({
  forecast: { name, list, timezone },
}) {
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
    <View style={styles.wrapper}>
      <View style={styles.date}>
        <NumberToMonth />
      </View>
      {/* <Text style={styles.location}>{name}</Text>{" "} */}
    </View>
  );
}
