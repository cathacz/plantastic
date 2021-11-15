import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

// for styling >>
import StyleMain from "../../styles/StyleMain";
import StylePlants from "../../styles/StylePlants";
import colors from "../../config/colors";

function PlantBottomNav(navigation) {
  return (
    <View style={StylePlants.navMainBottom}>
      {/* -------------------- Kurz & Dreckig (Overview) Button -------------------- */}

      <TouchableHighlight
        underlayColor={colors.sage25}
        style={[StylePlants.navItem, StylePlants.active]}
      >
        <View style={StylePlants.navElements}>
          <Image
            source={require("../../../assets/icons/png/fork.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={StylePlants.navText}>Kurz {"&"} dreckig</Text>
        </View>
      </TouchableHighlight>

      {/* -------------------- Pflanzenportrait (PlantPortrait) Button -------------------- */}

      <TouchableHighlight
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
      </TouchableHighlight>

      {/* -------------------- Tagebuch (Diary) Button -------------------- */}

      <TouchableHighlight
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
      </TouchableHighlight>
    </View>
  );
}

export default PlantBottomNav;
