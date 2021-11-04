import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>Your app works!</Text>
      <StatusBar style="auto" />
      <Text>This is {route.params.name}'s profile</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Home", { title: "new title does not work?" })
        }
      ></TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Welcome", { userName: "userName" })}
      >
        <Text>Go back again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
