import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeTest from "./app/screens/trash/HomeTest";
import newTest from "./app/screens/trash/newTest";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTest}
          options={{ title: "Welcome", name: "Mica" }}
        />
        <Stack.Screen
          name="newTest"
          component={newTest}
          options={{ title: "test2" }}
        />
        <Stack.Screen
          name="profile"
          component={profile}
          options={{ title: "profile" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// import React from "react";
// import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import colors from "./app/config/colors";
// import Home from "./app/screens/Home";
// import Today from "./app/screens/Today";
// import Overview from "./app/screens/Overview";
// import MyGarden from "./app/screens/MyGarden";
// import Community from "./app/screens/Community";
// import { Colors } from "react-native/Libraries/NewAppScreen";
// import NavMainBottom from "./app/components/MainComponents/NavMainBottom";
// import NavMainTop from "./app/components/MainComponents/NavMainTop";

// import Home from "./app/screens/trash/HomeTest";
// import Today from "./app/screens/Today";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: "Welcome" }}
//         />
//       </Stack.Navigator>
//       {/* <Stack.Screen name="Today" component={Today} /> */}
//       {/* <SafeAreaView style={styles.app}></SafeAreaView> */}
//     </NavigationContainer>
//   );
// };
// const styles = StyleSheet.create({
//   app: {
//     backgroundColor: "white",
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     position: "absolute",
//     alignContent: "center",
//     justifyContent: "center",
//   },
//   item: {
//     width: "100%",
//     height: "100%",
//     alignContent: "center",
//     justifyContent: "center",
//     borderColor: colors.sage75,
//     borderStyle: "solid",
//     borderWidth: 23,
//   },
//   elements: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     borderColor: colors.sage5,
//     borderStyle: "solid",
//     borderWidth: 30,
//     alignContent: "center",
//     justifyContent: "center",
//   },
//   textLogo: { fontSize: 40, textAlign: "center" },
//   text: { fontSize: 22.5, textAlign: "center" },
// });
export default App;
