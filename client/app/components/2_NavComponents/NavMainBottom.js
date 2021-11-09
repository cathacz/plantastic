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

      <TouchableOpacity style={[StyleMain.navItem]}>
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navElement]}
          onPress={() =>
            navigation.navigate("Today", {
              propOne: "propOne props",
            })
          }
        >
          <Image
            source={require("../../../assets/icons/png/shed.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Heute</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- Overview Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("Overview", {
            propOne: "propOne props",
          })
        }
      >
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navElement]}
        >
          <Image
            source={require("../../../assets/icons/png/calendarView.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Übersicht</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- MyGarden Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("MyGarden", {
            propOne: "propOne props",
          })
        }
      >
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navElement]}
        >
          <Image
            source={require("../../../assets/icons/png/meinGarten.png")}
            style={StyleMain.navElementImage}
          />
          <Text style={StyleMain.navText}>Mein Garten</Text>
        </View>
      </TouchableOpacity>

      {/* --------------- Community Button --------------- */}

      <TouchableOpacity
        style={[StyleMain.navItem]}
        onPress={() =>
          navigation.navigate("Community", {
            propOne: "propOne props",
          })
        }
      >
        <View
          underlayColor="rgba(109, 153, 130, 0.25)"
          style={[StyleMain.navElement]}
        >
          <Image
            source={require("../../../assets/icons/png/reihenAbstand.png")}
            style={StyleMain.navElementImage}
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
//   // navElement: {
//   //   alignItems: "center",
//   //   justifyContent: "center",
//   // },
//   // navText: {
//   //   marginTop: 5,
//   // },
// });

export default NavMainBottom;
