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

function NavMainTop({ navigation }) {
  return (
    <SafeAreaView style={StyleMain.navMainTop}>
      {/* -------------------------------------------------------- Logo */}
      <View style={StyleMain.navTopItem}>
        <View style={StyleMain.navTopElement}>
          <Image
            source={require("../../../assets/icons/png/plantastic.png")}
            style={StyleMain.navTopElementImage}
          />
          <Text style={StyleMain.navTopText}>Plantastic</Text>
        </View>
      </View>
      {/* -------------------------------------------------- SearchMenu (search button) */}
      <View style={StyleMain.searchMenuWrapperRight}>
        <TouchableOpacity>
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
        </TouchableOpacity>
        {/* -------------------------------------------------- Add Task (plus button) */}
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
