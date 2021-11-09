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

      <TouchableHighlight style={[StyleMain.navItem]}>
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
      </TouchableHighlight>

      {/* --------------- Overview Button --------------- */}

      <TouchableHighlight
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
      </TouchableHighlight>

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

export default NavMainBottom;
