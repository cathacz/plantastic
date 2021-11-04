import React from "react";

import { View, Text, Button } from "react-native";

function newTest({ navigation }) {
  return (
    <View>
      <Text>Hello see me?</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </View>
  );
}

export default newTest;
