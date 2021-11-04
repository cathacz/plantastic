import React from "react";
import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";

function HomeTest({ navigation, route }) {
  return (
    <SafeAreaView>
      <Text>Hello, I am a Testing Page.</Text>
      {/* <Text>This is {route.params.name}'s profile</Text> */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("newTest", { title: "new title does not work?" })
        }
      ></TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Welcome", { userName: "userName" })}
      >
        <Text>Go back again</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
}

export default HomeTest;
