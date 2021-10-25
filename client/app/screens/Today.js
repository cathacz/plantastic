import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const Today = () => (
  <SafeAreaView>
    <Text style={styles.mainText}>Motherhugger</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainText: {
    marginTop: 80,
    height: 150,
    width: "100%",
    backgroundColor: "rgba(109, 153, 130, 0.5)",
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Today;
