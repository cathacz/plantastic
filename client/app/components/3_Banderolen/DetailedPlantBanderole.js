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

// example plant
import Tomato from "../../../assets/jsons/tomatoPortrait.json";

const DetailedPLantBanderole = () => {
  return (
    <View style={[StylePlants.banderole]}>
      {/* --------------------------------------------------------------- Banderole */}
      {/* <SafeAreaView style={StylePlants.banderole}>
  <Text style={StylePlants.mainText}>Pflanzenportrait</Text>
</SafeAreaView>; */}
      <Text style={DetailedPlantPortraitStyles.plantTitle}>
        {Tomato.labels.plant_genus[0]}
      </Text>
      <Text style={DetailedPlantPortraitStyles.plantVarietyName}>
        {Tomato.labels.specific_variety_name}
      </Text>
      <Text style={DetailedPlantPortraitStyles.botanicalName}>
        {Tomato.labels.botanical_name}
      </Text>

      {/* ------------------planting time >>  */}
      <View
        name="plant_time_container"
        style={[
          DetailedPlantPortraitStyles.banderoleArea,
          DetailedPlantPortraitStyles.plantTimeContainer,
        ]}
      >
        <View
          name="plant_time_titles_container"
          style={[
            DetailedPlantPortraitStyles.banderoleArea,
            DetailedPlantPortraitStyles.plantTimeTitlesContainer,
          ]}
        >
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          >
            <Text
              name="plant_time_title_text"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.plantTimeTitleText,
              ]}
            >
              Nada
            </Text>
          </View>
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          >
            <Text
              name="plant_time_title_text"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.plantTimeTitleText,
              ]}
            >
              Aussaat
            </Text>
          </View>
          <View
            name="plant_time_title"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.plantTimeTitle,
            ]}
          >
            <Text
              name="plant_time_title_text"
              style={[
                DetailedPlantPortraitStyles.border,
                DetailedPlantPortraitStyles.plantTimeTitleText,
              ]}
            >
              Ernte
            </Text>
          </View>
        </View>

        {/* --------- months >> */}
        <View
          name="plant_time_months_outer_container"
          style={[
            DetailedPlantPortraitStyles.banderoleArea,
            DetailedPlantPortraitStyles.monthsOuterContainer,
          ]}
        >
          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
          >
            {/* --------- January >> */}
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

            {/* --------- February >> */}

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
                Feb
              </Text>
            </View>

            {/* --------- March >> */}

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
                Mär
              </Text>
            </View>

            {/* --------- April >> */}

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
                Apr
              </Text>
            </View>

            {/* --------- May >> */}

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
                Mai
              </Text>
            </View>

            {/* --------- June >> */}

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
                Jun
              </Text>
            </View>

            {/* --------- July >> */}

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
                Jul
              </Text>
            </View>

            {/* --------- August >> */}

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
                Aug
              </Text>
            </View>

            {/* --------- September >> */}

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
                Sep
              </Text>
            </View>

            {/* --------- October >> */}

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
                Okt
              </Text>
            </View>

            {/* --------- November >> */}

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
                Nov
              </Text>
            </View>

            {/* --------- December >> */}

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

          {/* --------------- Aussaat >> */}

          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
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

          {/* --------------- Ernte >> */}

          <View
            name="plant_time_months_inner_container"
            style={[
              DetailedPlantPortraitStyles.banderoleArea,
              DetailedPlantPortraitStyles.monthsInnerContainer,
            ]}
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
