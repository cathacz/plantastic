import React from "react";

// navigator funktionality >>
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screen components for navigator >>
import Today from "./app/screens/1_MainScreens/1_Today";
import Overview from "./app/screens/1_MainScreens/2_Overview";
import MyGarden from "./app/screens/1_MainScreens/3_MyGarden";
import Community from "./app/screens/1_MainScreens/4_Community";
import SearchMenu from "./app/screens/3_SearchMenuScreens/SearchMenu";

// piece components >>
import NavMainBottom from "./app/components/2_NavComponents/NavMainBottom";
import NavMainTop from "./app/components/2_NavComponents/NavMainTop";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        {/* Main Screens ---------------------------------- */}
        <Stack.Group
          screenOptions={
            {
              // headerShown: false,
              // headerTitleAlign: "center",
            }
          }
        >
          <Stack.Screen
            name="Today"
            component={Today}
            options={{
              headerTitle: (props) => <NavMainTop {...props} />,
              // headerTitleAlign: "left",
              // headerStyle: {
              //   backgroundColor: "#f4511e",
              //   padding: 0,
              //   margin: 0,
              //   title: "left",
              // },
              // Screen: {
              //   headerTitleAlign: "flex-start",
              // },
            }}
          />
          <Stack.Screen
            name="Overview"
            component={Overview}
            // options={{ title: "Monatsübersicht" }}
          />
          <Stack.Screen
            name="MyGarden"
            component={MyGarden}
            // options={{ title: "Mein Garten" }}
          />
          <Stack.Screen
            name="Community"
            component={Community}
            // options={{ title: "Mein Gartenverein" }}
          />
        </Stack.Group>

        {/* Screens accessible from top nav---------------------------------- */}
        <Stack.Screen
          name="SearchMenu"
          component={SearchMenu}
          options={{ title: "Menu" }}
        />

        {/* Screens accessible from Today---------------------------------- */}
        {/* Screens accessible from Overview---------------------------------- */}
        {/* Screens accessible from MyGarden---------------------------------- */}
        {/* Screens accessible from MyCommunity---------------------------------- */}
        {/* Screens accessible from ---------------------------------- */}
        {/* Screens accessible from ---------------------------------- */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ----------------

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
