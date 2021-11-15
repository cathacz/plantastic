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

import QuickView from "./app/screens/2_PlantScreens/QuickView";
import PlantPortrait from "./app/screens/2_PlantScreens/PlantPortrait";
import Diary from "./app/screens/2_PlantScreens/Diary";

// import SettingsMenu from "./app/screens/4_SettingsScreens/SettingsMenu";

// piece components >>
import NavMainBottom from "./app/components/2_NavComponents/NavMainBottom";
import NavMainTop from "./app/components/2_NavComponents/NavMainTop";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{}}>
        {/* Main Screens ----------------------------------------------------- */}
        <Stack.Group
          screenOptions={{
            header: (props) => <NavMainTop {...props} />,
          }}
        >
          <Stack.Screen name="Today" component={Today} options={{}} />
          <Stack.Screen name="Overview" component={Overview} options={{}} />
          <Stack.Screen name="MyGarden" component={MyGarden} options={{}} />
          <Stack.Screen name="Community" component={Community} options={{}} />
        </Stack.Group>

        {/* Screens accessible from top nav----------------------------------- */}
        <Stack.Screen
          name="SearchMenu"
          component={SearchMenu}
          options={{ title: "Search Menu" }}
        />

        {/* Screens accessible from Today------------------------------------- */}
        {/* Screens accessible from Overview---------------------------------- */}
        {/* Screens accessible from MyGarden---------------------------------- */}
        <Stack.Screen
          name="QuickView"
          component={QuickView}
          options={{ header: (props) => <NavMainTop {...props} /> }}
        />
        <Stack.Screen
          name="PlantPortrait"
          component={PlantPortrait}
          options={{ header: (props) => <NavMainTop {...props} /> }}
        />
        <Stack.Screen
          name="Diary"
          component={Diary}
          options={{ header: (props) => <NavMainTop {...props} /> }}
        />
        {/* Screens accessible from MyCommunity------------------------------- */}
        {/* Screens accessible from ------------------------------------------ */}
        {/* <Stack.Screen
          name="SettingsMenu"
          component={SettingsMenu}
          options={{ title: "Search Menu" }}
        /> */}
        {/* Screens accessible from ------------------------------------------ */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
