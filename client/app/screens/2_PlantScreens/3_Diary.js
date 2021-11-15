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

// for styling >>
import colors from "../../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

// piece components >>
import PlantBottomNav from "../../components/2_NavComponents/PlantBottomNav";
// import Task from "../../components/Task";
import StylePlants from "../../styles/StylePlants";

const Diary = ({ navigation }) => {
  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}

      <StatusBar style="auto" />

      {/* ----------------------------------------------------- Banderole */}
      <SafeAreaView style={StylePlants.banderole}>
        <Text style={StylePlants.mainText}>Tagebuch</Text>
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
export default Diary;
// unused by this component >>

{
  /* --------------------------------------------------- Navigation Main Top */
}
// <SafeAreaView style={StylePlants.navMainTop}>
//   <View
//     to="/myGarden"
//     underlayColor="white"
//     style={StylePlants.navTopItem}
//   >
//     <View style={StylePlants.navTopElements}>
//       <Image
//         source={require("../../../assets/icons/png/back-button.png")}
//         style={{
//           height: 50,
//           width: 50,
//           alignItems: "center",
//           margin: 5,
//         }}
//       />
//     </View>
//   </View>
// </SafeAreaView>
