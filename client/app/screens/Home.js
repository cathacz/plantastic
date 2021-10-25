import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const Home = () => (
  <SafeAreaView>
    <Text style={styles.mainText}>You are home</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainText: {
    marginTop: 30,
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
    position: "absolute",
    left: 21,
  },
});
export default Home;
