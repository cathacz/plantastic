import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import { NativeRouter, Route, Link, Switch } from "react-router-native";
import colors from "./app/config/colors";
import Home from "./app/screens/0_Home";
import Today from "./app/screens/NavBottomMain/Today";
import Overview from "./app/screens/NavBottomMain/Overview";
import MyGarden from "./app/screens/NavBottomMain/MyGarden";
import Community from "./app/screens/NavBottomMain/Community";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { render } from "react-dom";
import QuickView from "./app/screens/QuickView";
import PlantPortrait from "./app/screens/PlantPortrait";
import Diary from "./app/screens/Diary";
import SearchMenu from "./app/screens/SearchMenu";
// import NavMainBottom from "./app/components/MainComponents/NavMainBottom";
// import NavMainTop from "./app/components/MainComponents/NavMainTop";

const App = () => {
  return (
    <SafeAreaView style={styles.router}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/today" component={Today} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/myGarden" component={MyGarden} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/quickView" component={QuickView} />
            <Route exact path="/plantportrait" component={PlantPortrait} />
            <Route exact path="/diary" component={Diary} />
            <Route exact path="/searchMenu" component={SearchMenu} />
          </Switch>
        </View>
      </NativeRouter>
      <Today />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  router: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignContent: "center",
    justifyContent: "center",
  },
});
export default App;
