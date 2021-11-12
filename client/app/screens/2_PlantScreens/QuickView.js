import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

import colors from "../../config/colors";

import MyGarden from "../1_MainScreens/3_MyGarden";
// import QuickView from "./QuickView.js";
import PlantPortrait from "./PlantPortrait";
import Diary from "./Diary";

import { Colors } from "react-native/Libraries/NewAppScreen";
import Task from "../../components/Task";
import StylePlants from "../../styles/StylePlants";

const QuickView = ({ navigation }) => {
  return (
    <SafeAreaView style={StylePlants.container}>
      {/* ----------------------------------------------------- Navigation Main Top */}
      <SafeAreaView style={StylePlants.navMainTop}>
        <View underlayColor="white" style={StylePlants.navTopItem}>
          <View style={StylePlants.navTopElements}>
            <Image
              source={require("../../../assets/icons/png/back-button.png")}
              style={{
                height: 50,
                width: 50,
                alignItems: "center",
                margin: 5,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* --------------------------------------------------------------- Banderole */}
      <SafeAreaView style={StylePlants.banderole}>
        <Text style={StylePlants.mainText}>kurz {"&"} dreckig</Text>
      </SafeAreaView>
      {/* ----------------------------------------------------- Main Part */}

      {/* ---------------------------------------- Navigation Main Bottom */}
      <SafeAreaView style={StylePlants.navMainBottom}>
        <View
          to="/quickView"
          underlayColor={colors.sage25}
          style={[StylePlants.navItem, StylePlants.active]}
        >
          <View style={StylePlants.navElements}>
            <Image
              source={require("../../../assets/icons/png/fork.png")}
              style={{ height: 50, width: 50, alignItems: "center" }}
            />
            <Text style={StylePlants.navText}>Kurz {"&"} dreckig</Text>
          </View>
        </View>

        <View
          to="/plantPortrait"
          underlayColor={colors.sage25}
          style={StylePlants.navItem}
        >
          <View style={StylePlants.navElements}>
            <Image
              source={require("../../../assets/icons/png/pflanzenPortrait.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StylePlants.navText}>Pflanzenportrait</Text>
          </View>
        </View>

        <View
          to="/diary"
          underlayColor={colors.sage25}
          style={StylePlants.navItem}
        >
          <View style={StylePlants.navElements}>
            <Image
              source={require("../../../assets/icons/png/tageBuch.png")}
              style={{ height: 50, width: 50 }}
            />
            <Text style={StylePlants.navText}>Tagebuch</Text>
          </View>
        </View>
      </SafeAreaView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default QuickView;