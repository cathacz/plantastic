import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import StyleMain from "../styles/StyleMain";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import { de } from "date-fns/locale";

const NumberToMonth = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let year = new Date().getFullYear(); //Current Year
    let d = new Date().getMonth(); // current Month ! starting index 0 !
    let day = new Date().getDay();
    // let weekday = format(new Date(), "eeee");
    let weekday = format(new Date(), "EEEE", {
      awareOfUnicodeTokens: true,
      locale: de,
    });

    //=> "Today is a Thursday"

    const date = new Date(2017, 1, 29);

    console.log(
      format(date, "EEEE MMMM yyyy", { awareOfUnicodeTokens: true, locale: de })
    );

    const dateWord = formatRelative(subDays(new Date(), 3), new Date(), {
      locale: de,
    });

    console.log(dateWord);

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
