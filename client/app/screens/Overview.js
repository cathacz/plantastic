import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const Overview = () => (
  <SafeAreaView>
    <Text style={styles.mainText}>Son of a gun</Text>
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
export default Overview;
