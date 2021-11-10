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

import Today from "./1_Today";
import Overview from "./2_Overview";
import Community from "./4_Community";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
import SearchMenu from "../3_SearchMenuScreens/SearchMenu";
import StyleMain from "../../styles/StyleMain";
import QuickView from "../2_PlantScreens/QuickView.js";
import Banderole from "../../components/3_Banderolen/BanderoleDressy";

const MyGarden = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleMain.container}>
      {/* --------------------------------------------------------------- Banderole */}
      <Banderole />
      <View style={StyleMain.banderole}>
        <Text style={StyleMain.mainText}>
          <View style={StyleMain.quick}>
            <View
              to="/quickView"
              underlayColor={colors.sage25}
              style={styles.quickLink}
            >
              <View style={styles.quicky}>
                <Image
                  source={require("../../../assets/icons/png/berries.png")}
                  style={{ height: 50, width: 50, alignItems: "center" }}
                />
                <Text style={styles.quickyText}>Beeren</Text>
              </View>
            </View>
          </View>
        </Text>
      </View>
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
