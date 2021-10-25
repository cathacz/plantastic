import React from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

const Community = () => (
  <SafeAreaView>
    <Text style={styles.mainText}>Community</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  mainText: {
    marginTop: 100,
    color: "black",
    fontSize: 40,
    fontFamily: "Arial",
  },
});
export default Community;
