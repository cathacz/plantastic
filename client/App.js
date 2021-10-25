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
      <SafeAreaView>
        <Text style={styles.mainText}>You are @ App.js</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.nav}>
        <Link
          to="/today"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <View>
            <Image
              source={require("./assets/icons/shed.svg")}
              style={{ height: 50, width: 50, tintColor: "black" }}
            />
            <Text>Heute</Text>
          </View>
        </Link>
        <Link
          to="/overview"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <Text>Übersicht</Text>
        </Link>
        <Link
          to="/myGarden"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <Text>Mein Garten</Text>
        </Link>
        <Link
          to="/community"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={styles.navItem}
        >
          <Text>Community</Text>
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
  nav: {
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
});
