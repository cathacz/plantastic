import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const MyGarden = () => (
  <SafeAreaView>
    <Text style={styles.mainText}>My Freaking Garden</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainText: {
    marginTop: 100,
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
    position: "absolute",
    left: 21,
  },
});
export default MyGarden;
