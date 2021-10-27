import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import colors from "../config/colors";
// import Home from "../screens/Home";
// import Today from "../screens/Today";
import Overview from "../screens/Overview";
import MyGarden from "../screens/MyGarden";
import Community from "../screens/Community";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Today = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <NativeRouter>
        {/* Navigation Main Top */}
        <SafeAreaView style={styles.navMainTop}>
          <Link
            to="/today"
            style={{ backgroundColor: colors.sage5 }}
            style={styles.navTopItem}
          >
            <View style={styles.navTopElements}>
              <Image
                source={require("../../assets/icons/png/plantastic.png")}
                style={{
                  height: 50,
                  width: 50,
                  alignItems: "center",
                  margin: 5,
                }}
              />
              <Text style={styles.navTopText}>Plantastic</Text>
            </View>
          </Link>
        </SafeAreaView>
        {/* Banderole */}
        <SafeAreaView style={styles.banderole}>
          <Text style={styles.mainText}>
            This is today {"\n"}
            {currentDate}
          </Text>
        </SafeAreaView>
        {/* Navigation Main Bottom */}
        <SafeAreaView style={styles.navMainBottom}>
          <Link
            to="/today"
            underlayColor={colors.sage25}
            style={styles.navItem}
          >
            <View style={styles.navElements}>
              <Image
                source={require("../../assets/icons/png/shed.png")}
                style={{ height: 50, width: 50, alignItems: "center" }}
              />
              <Text style={styles.navText}>Heute</Text>
            </View>
          </Link>

          <Link
            to="/overview"
            underlayColor={colors.sage25}
            style={styles.navItem}
          >
            <View style={styles.navElements}>
              <Image
                source={require("../../assets/icons/png/calendarView.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={styles.navText}>Übersicht</Text>
            </View>
          </Link>

          <Link
            to="/myGarden"
            underlayColor={colors.sage25}
            style={styles.navItem}
          >
            <View style={styles.navElements}>
              <Image
                source={require("../../assets/icons/png/meinGarten.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={styles.navText}>Mein Garten</Text>
            </View>
          </Link>

          <Link
            to="/community"
            underlayColor={colors.sage25}
            style={styles.navItem}
          >
            <View style={styles.navElements}>
              <Image
                source={require("../../assets/icons/png/reihenAbstand.png")}
                style={{ height: 50, width: 50 }}
              />
              <Text style={styles.navText}>Community</Text>
            </View>
          </Link>
        </SafeAreaView>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/today" component={Today} />
        <Route path="/overview" component={Overview} />
        <Route path="/myGarden" component={MyGarden} />
        <Route path="/community" component={Community} />
      </NativeRouter>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    // top: 0,
    backgroundColor: "white",
  },
  mainText: {
    marginTop: 100,
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
    position: "absolute",
    textAlign: "center",
  },
  // Navigation Main Top
  navMainTop: {
    position: "absolute",
  },
  navTopItem: {},
  navTopElements: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  navTopText: {
    fontSize: 30,
  },
  //   Banderole
  banderole: {
    marginTop: 80,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  //  Navigation Main Bottom
  navMainBottom: {
    backgroundColor: "white",
    borderColor: "white",
    borderTopColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 90,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: colors.sage5,
  },
  navElements: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 5,
  },
});
export default Today;
