import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from "react-native";

// import MyGarden from "../1_MainScreens/3_MyGarden";
// import QuickView from "./QuickView.js";
// // import PlantPortrait from "./PlantPortrait";
// import Diary from "./Diary";
// import Task from "../../components/Task";

// for styling
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";
import DetailedPlantPortraitStyles from "../../styles/DetailedPlantPortraitStyle";
import StylePlants from "../../styles/StylePlants";
import StyleMain from "../../styles/StyleMain";

const DetailedPLantBanderole = () => {
  return (
    <View style={[StylePlants.banderole]}>
      {/* --------------------------------------------------------------- Banderole */}
      {/* <SafeAreaView style={StylePlants.banderole}>
  <Text style={StylePlants.mainText}>Pflanzenportrait</Text>
</SafeAreaView>; */}
      <Text style={DetailedPlantPortraitStyles.plantTitle}>
        Name Pflanzensorte
      </Text>
      <Text style={DetailedPlantPortraitStyles.plantVarietyName}>
        "Sortenname spezifisch"
      </Text>
      <Text style={DetailedPlantPortraitStyles.botanicalName}>
        botanischer Name
      </Text>
      <View
        name="plant_time_container"
        style={DetailedPlantPortraitStyles.banderoleArea}
      >
        <View
          name="plant_time_titles_container"
          style={DetailedPlantPortraitStyles.banderoleArea}
        >
          <View
            name="plant_time_title"
            style={DetailedPlantPortraitStyles.banderoleArea}
          ></View>
          <View
            name="plant_time_title"
            style={DetailedPlantPortraitStyles.banderoleArea}
          ></View>
          <View
            name="plant_time_title"
            style={DetailedPlantPortraitStyles.banderoleArea}
          ></View>
        </View>
        <View
          name="plant_time_months_outer_container"
          style={DetailedPlantPortraitStyles.monthsOuterContainer}
        >
          <View
            name="plant_time_months_inner_container"
            style={DetailedPlantPortraitStyles.monthsInnerContainer}
          >
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            >
              <Text
                name="month_name"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthName,
                ]}
              >
                Jan
              </Text>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Jan
                </Text>
              </View>
              <View
                name="plant_time_month"
                style={[
                  DetailedPlantPortraitStyles.border,
                  DetailedPlantPortraitStyles.monthBox,
                ]}
              >
                <Text
                  name="month_name"
                  style={[
                    DetailedPlantPortraitStyles.border,
                    DetailedPlantPortraitStyles.monthName,
                  ]}
                >
                  Dez
                </Text>
              </View>
            </View>
          </View>
          <View
            name="plant_time_months_inner_container"
            style={DetailedPlantPortraitStyles.monthsInnerContainer}
          >
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
          </View>
          <View
            name="plant_time_months_inner_container"
            style={DetailedPlantPortraitStyles.monthsInnerContainer}
          >
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
            <View
              name="plant_time_month"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.monthBox,
              ]}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default DetailedPLantBanderole;
