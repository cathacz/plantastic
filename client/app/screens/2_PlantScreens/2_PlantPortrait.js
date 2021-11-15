import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

// import MyGarden from "../1_MainScreens/3_MyGarden";
// import QuickView from "./QuickView.js";
// import PlantPortrait from "./PlantPortrait";
// import Diary from "./Diary";

// piece components >>
import PlantBottomNav from "../../components/2_NavComponents/PlantBottomNav";
import Task from "../../components/Task";
import StylePlants from "../../styles/StylePlants";

// for styling >>
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

const PlantPortrait = ({ navigation }) => {
  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}

      <StatusBar style="auto" />

      {/* ----------------------------------------------------- Navigation Main Top */}
      <SafeAreaView style={StylePlants.navMainTop}>
        <View
          to="/myGarden"
          underlayColor="white"
          style={StylePlants.navTopItem}
        >
          <View style={StylePlants.navTopElements}>
            <Image
              source={require("../../../assets/icons/png/back-button.png")}
              style={{
                height: 50,
                width: 50,
                margin: 5,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      {/* --------------------------------------------------------------- Banderole */}
      <SafeAreaView style={StylePlants.banderole}>
        <Text style={StylePlants.mainText}>Pflanzenportrait</Text>
      </SafeAreaView>
      {/* ----------------------------------------------------- Main Part */}

      {/* ---------------------------------------- Navigation Main Bottom */}
      <PlantBottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default PlantPortrait;
