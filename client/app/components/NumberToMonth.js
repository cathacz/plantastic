import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import StyleMain from "../styles/StyleMain";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const NumberToMonth = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let year = new Date().getFullYear(); //Current Year
    let d = new Date().getMonth(); // current Month ! starting index 0 !
    let day = new Date().getDay();
    let weekday = format(new Date(), "eeee");
    //=> "Today is a Thursday"

    let monthNames = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];

    const monthName = monthNames[d];

    setCurrentDate(
      day + "." + " " + monthName + " " + year + "," + " " + weekday //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default NumberToMonth;
