import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import colors from "../../config/colors";

function BanderoleDressy() {
  return (
    <View style={styles.banderole}>
      <View style={styles.quicky}>
        <Image
          source={require("../../../assets/icons/png/berries.png")}
          style={{ height: 50, width: 50, alignItems: "center" }}
        />
        <Text style={styles.quickyText}>Beeren</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banderole: {
    marginTop: 0,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BanderoleDressy;
