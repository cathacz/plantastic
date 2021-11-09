import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
} from "react-native";

import colors from "../../config/colors";
// import Today from "../../screens/ComponentsTest/Today";
// import SearchMenu from "../../screens/SearchMenu";

import StyleMain from "../../styles/StyleMain";

function NavMainTop() {
  return (
    <SafeAreaView style={StyleMain.navMainTop}>
      {/* -------------------------------------------------------- Logo */}
      <View underlayColor="white" style={StyleMain.navTopItem}>
        <View style={StyleMain.navTopElements}>
          <Image
            source={require("../../../assets/icons/png/plantastic.png")}
            style={{
              height: 50,
              width: 50,
              alignItems: "center",
              margin: 5,
            }}
          />
          <Text style={StyleMain.navTopText}>Plantastic</Text>
        </View>
      </View>
      {/* -------------------------------------------------- SearchMenu */}
      <View style={StyleMain.searchMenuWrapperRight}>
        <View underlayColor="white">
          <View style={StyleMain.searchMenuWrapper}>
            <View style={StyleMain.searchMenuWrapperFirstRow}>
              <View style={StyleMain.searchMenuItem}></View>
              <View style={StyleMain.searchMenuItem}></View>
            </View>

            <View style={StyleMain.searchMenuWrapperSecondRow}>
              <View style={StyleMain.searchMenuItem}></View>
              <View style={StyleMain.searchMenuItem}></View>
            </View>
          </View>
        </View>
        {/* -------------------------------------------------- Add Task */}
        <TouchableOpacity>
          {/*onPress={() => handleAddTask()}*/}
          <View style={StyleMain.addWrapper}>
            <Text style={StyleMain.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/searchMenu" component={SearchMenu} /> */}
      {/* <Route path="/today" component={Today} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default NavMainTop;
