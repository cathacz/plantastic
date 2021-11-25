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

// piece components >>
import PlantBottomNav from "../../components/2_NavComponents/PlantBottomNav";
import DetailedPlantBanderole from "../../components/3_Banderolen/DetailedPlantBanderole";
// import Task from "../../components/Task";

// for styling >>
import StylePlants from "../../styles/StylePlants";
import StyleMain from "../../styles/StyleMain";
import DetailedPlantPortraitStyles from "../../styles/DetailedPlantPortraitStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// example plant
import Tomato from "../../../assets/jsons/tomatoPortrait.json";
// tomato image
import tomatoImage from "../../../assets/images/roma_tomatoes.jpg";

const PlantPortrait = ({ navigation }) => {
  // console.log(Tomato.images.map((item) => item.image_link));
  // console.log("tomato object >>" + Tomato.images[0].image_link);
  // const plantImage = `../../../assets/images/` + Tomato.images[0].image_link;
  // const resolveAssetSource = Image.resolveAssetSource(tomatoImage).uri;
  // console.log(plantImage);

  // plant care information >>

  const plantCareText = Tomato.plant_data.care.care_information; // array of paragraphs
  const plantDescription = Tomato.plant_data.plant_description; // array of paragraphs
  const plantInfo = Tomato.plant_data.plant_information; // array of paragraphs
  const extraInfo = Tomato.plant_data.other_information; // array of paragraphs

  console.log(plantDescription);

  return (
    <SafeAreaView style={StylePlants.container}>
      {/* -------------------- statusbar -------------------- */}

      <StatusBar style="auto" />

      {/* ----------------------------------------------------- Banderole */}

      <DetailedPlantBanderole />

      {/* ----------------------------------------------------- Middle Part */}
      <ScrollView style={DetailedPlantPortraitStyles.mainContent}>
        {/* -------------------- image carousel -------------------- */}

        {/* <Image
          style={{}}
          source={{ uri: "data:../../../assets/images/roma_tomatoes.jpg" }}
        /> */}

        {/* <Image style={{}} source={require(plantImage)} /> */}
        {/* <Image
          style={{}}
          source={require(`../../../assets/images/roma_tomatoes.jpg`)}
        /> */}

        {/* -------------------- description -------------------- */}

        <Text style={DetailedPlantPortraitStyles.topicTitles}>
          Beschreibung
        </Text>
        <View style={{}}>
          {plantDescription.map((paragraph, i) => (
            <Text key={i} style={{}}>
              {JSON.stringify(paragraph)}
            </Text>
          ))}
        </View>

        {/* -------------------- general information -------------------- */}

        <Text style={DetailedPlantPortraitStyles.topicTitles}>Allgemeines</Text>
        <View style={{}}>
          {plantInfo.map((paragraph, i) => (
            <Text key={i} style={{}}>
              {JSON.stringify(paragraph)}
            </Text>
          ))}
        </View>

        {/* -------------------- variety specific information -------------------- */}

        <Text style={DetailedPlantPortraitStyles.topicTitles}>
          Über {Tomato.labels.specific_variety_name}
        </Text>
        <View style={{}}>
          {plantCareText.map((paragraph, i) => (
            <Text key={i} style={{}}>
              {JSON.stringify(paragraph)}
            </Text>
          ))}
        </View>

        {/* -------------------- care -------------------- */}

        <Text style={DetailedPlantPortraitStyles.topicTitles}>Pflege</Text>
        <View style={{}}>
          {plantCareText.map((paragraph, i) => (
            <Text key={i} style={{}}>
              {JSON.stringify(paragraph)}
            </Text>
          ))}
        </View>

        {/* -------------------- other -------------------- */}

        <Text style={DetailedPlantPortraitStyles.noStyle}>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness.
        </Text>
      </ScrollView>
      {/* ---------------------------------------- Navigation Main Bottom */}
      <PlantBottomNav navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
});
export default PlantPortrait;

// unused from this component >>
{
  /* ----------------------------------------------------- Navigation Main Top */
}
{
  /* <SafeAreaView style={StylePlants.navMainTop}>
<View
  to="/myGarden"
  underlayColor="white"
  style={StylePlants.navTopItem}
>
  <View style={StylePlants.navTopElements}>
    <Image
      source={require("../../../assets/icons/png/back-button.png")}
      style={{
        height: 50,
        width: 50,
        margin: 5,
      }}
    />
  </View>
</View>
</SafeAreaView> */
}
