import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import Home from "./app/screens/Home";
import Today from "./app/screens/Today";
import Overview from "./app/screens/Overview";
import MyGarden from "./app/screens/MyGarden";
import Community from "./app/screens/Community";

export default function App() {
  return (
    <NativeRouter>
      {/* TOP Nav */}
      <SafeAreaView style={styles.navMainTop}>
        <Link to="/today" style={styles.navTopItem}>
          <View style={styles.navTopElements}>
            <Image
              source={require("./assets/icons/png/plantastic.png")}
              style={{ height: 50, width: 50, alignItems: "center", margin: 5 }}
            />
            <Text style={styles.navTopText}>Plantastic</Text>
          </View>
        </Link>
      </SafeAreaView>
      {/* Content */}
      {/* <SafeAreaView>
        <Text style={styles.mainText}>You are @ App.js</Text>
      </SafeAreaView> */}

      {/* BOTTOM Nav */}
      <SafeAreaView style={styles.navMainBottom}>
        <Link
          to="/today"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("./assets/icons/png/shed.png")}
              style={{ height: 50, width: 50, alignItems: "center" }}
            />
            <Text style={styles.navText}>Heute</Text>
          </View>
        </Link>

        <Link
          to="/overview"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("./assets/icons/png/calendarView.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Übersicht</Text>
          </View>
        </Link>

        <Link
          to="/myGarden"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("./assets/icons/png/meinGarten.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Mein Garten</Text>
          </View>
        </Link>

        <Link
          to="/community"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View style={styles.navElements}>
            <Image
              source={require("./assets/icons/png/reihenAbstand.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={styles.navText}>Community</Text>
          </View>
        </Link>
      </SafeAreaView>

      <Route exact path="/" component={Home} />
      <Route path="/today" component={Today} />
      <Route path="/overview" component={Overview} />
      <Route path="/myGarden" component={MyGarden} />
      <Route path="/community" component={Community} />
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  // TOP Nav
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
  // BOTTOM Nav
  navMainBottom: {
    borderColor: "white",
    borderTopColor: "rgba(109, 153, 130, 0.25)",
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 100,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  navElements: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    marginTop: 5,
  },
});
