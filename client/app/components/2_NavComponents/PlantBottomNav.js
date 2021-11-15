import React from "react";

function PlantBottomNav() {
  return (
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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default PlantBottomNav;
