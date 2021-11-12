import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

// for styling >>
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

function MyGardenBanderole({ navigation }) {
  return (
    <TouchableOpacity
      style={StyleMain.banderole}
      onPress={() =>
        navigation.navigate("QuickView", {
          propOne: "propOne props",
        })
      }
    >
      <View style={styles}>
        <Image
          source={require("../../../assets/icons/png/berries.png")}
          style={{ height: 50, width: 50, alignItems: "center" }}
        />
        <Text style={styles}>Beeren</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banderole: {
    marginTop: 0,
    height: 200,
    width: "100%",
    backgroundColor: colors.sage5,

    // position: "absolute",
    // textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MyGardenBanderole;