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
import StyleMain from "../../styles/StyleMain";

import QuickView from "../2_PlantScreens/QuickView.js";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import SearchMenu from "../3_SearchMenuScreens/SearchMenu";
import MyGardenBanderole from "../../components/3_Banderolen/MyGardenBanderole";

const MyGarden = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* --------------------------------------------------------------- Banderole */}
      <MyGardenBanderole navigation={navigation} />
      {/* ----------------------------------------------------- Main Part */}

      {/* ---------------------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />

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
export default MyGarden;

// unused stuff >>

{
  /* <SafeAreaView style={StyleMain.navMainTop}>
  <View to="/today" underlayColor="white" style={StyleMain.navTopItem}>
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
  </View> */
}
{
  /* ------------- SearchMenu */
}
// <View style={StyleMain.searchMenuWrapperRight}>
//   <View to="/searchMenu" underlayColor="white">
//     <SafeAreaView style={StyleMain.searchMenuWrapper}>
//       <View style={StyleMain.searchMenuWrapperFirstRow}>
//         <View style={StyleMain.searchMenuItem}></View>
//         <View style={StyleMain.searchMenuItem}></View>
//       </View>

//       <View style={StyleMain.searchMenuWrapperSecondRow}>
//         <View style={StyleMain.searchMenuItem}></View>
//         <View style={StyleMain.searchMenuItem}></View>
//       </View>
//     </SafeAreaView>
//   </View>
{
  /* ------------- Add Task */
}
//     <TouchableOpacity>
//       {/*onPress={() => handleAddTask()}*/}
//       <View style={StyleMain.addWrapper}>
//         <Text style={StyleMain.addText}>+</Text>
//       </View>
//     </TouchableOpacity>
//   </View>
// </SafeAreaView>