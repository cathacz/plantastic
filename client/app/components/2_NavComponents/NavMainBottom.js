import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button,
} from "react-native";

// navigation components
import Today from "../../screens/1_MainScreens/1_Today";
import Overview from "../../screens/1_MainScreens/2_Overview";
import MyGarden from "../../screens/1_MainScreens/3_MyGarden";
import Community from "../../screens/1_MainScreens/4_Community";

// for styling
import colors from "../../config/colors";
import StyleMain from "../../styles/StyleMain";

function NavMainBottom({ navigation }) {
  console.log("from navbottom: " + navigation);

  return (
    <SafeAreaView
      name="navMainBottom-container"
      style={StyleMain.navMainBottom}
    >
      {/* --------------- Today Button --------------- */}

      <TouchableOpacity style={[StyleMain.navElements]}>
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navElements]}
          onPress={() =>
            navigation.navigate("Today", {
              propOne: "propOne props",
            })
          }
        >
          <Image
            source={require("../../../assets/icons/png/shed.png")}
            style={{ height: 50, width: 50, alignItems: "center" }}
          />
          <Text style={StyleMain.navText}>Heute</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- Overview Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem, StyleMain.navElements]}
        onPress={() =>
          navigation.navigate("Overview", {
            propOne: "propOne props",
          })
        }
      >
        <View
          to="/overview"
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.itemTwo, StyleMain.navElements]}
        >
          <Image
            source={require("../../../assets/icons/png/calendarView.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={StyleMain.navText}>Übersicht</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- MyGarden Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem, StyleMain.navElements]}
        onPress={() =>
          navigation.navigate("Overview", {
            propOne: "propOne props",
          })
        }
      >
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, StyleMain.navElements]}
        >
          <Image
            source={require("../../../assets/icons/png/meinGarten.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={StyleMain.navText}>Mein Garten</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- Community Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem, StyleMain.navElements]}
        onPress={() =>
          navigation.navigate("Overview", {
            propOne: "propOne props",
          })
        }
      >
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navItem, StyleMain.navElements]}
        >
          <Image
            source={require("../../../assets/icons/png/reihenAbstand.png")}
            style={{ height: 50, width: 50 }}
          />
          <Text style={StyleMain.navText}>Community</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   itemOne: { backgroundColor: "white" },
//   itemTwo: { backgroundColor: "white" },
//   itemThree: { backgroundColor: "white" },
//   itemFour: { backgroundColor: "white" },
//   // navMainBottom: {
//   //   backgroundColor: "white",
//   //   borderColor: "white",
//   //   borderTopColor: colors.sage25,
//   //   borderWidth: 1,
//   //   borderStyle: "solid",
//   //   alignItems: "center",
//   //   justifyContent: "space-around",
//   //   flexDirection: "row",
//   //   height: 100,
//   //   position: "absolute",
//   //   bottom: 0,
//   // },
//   // navItem: {
//   //   width: "25%",
//   //   height: "100%",
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // navElements: {
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // navText: {
//   //   marginTop: 5,
//   // },
// });

export default NavMainBottom;
