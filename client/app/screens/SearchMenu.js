import React from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import colors from "../config/colors";

function SearchMenu() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>SearchMenu</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchMenu;
