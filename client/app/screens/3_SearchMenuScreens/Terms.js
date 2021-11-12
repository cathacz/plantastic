import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
} from "react-native";

import colors from "../../config/colors";

import Today from "../1_MainScreens/1_Today";

import StyleMain from "../../styles/StyleMain";
import StylePlants from "../../styles/StylePlants";

const Terms = () => {
  return (
    <SafeAreaView style={StyleMain.container}>
      <SafeAreaView style={StylePlants.navMainTop}>
        <View to="/today" underlayColor="white" style={StylePlants.navTopItem}>
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
        <Text style={styles.text}>Terms</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: "center",
    top: 300,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Terms;
