import { StyleSheet } from "react-native";
import colors from "../config/colors";

const detailedPlantPortraitStyles = StyleSheet.create({
  // shared properties
  noStyle: {
    backgroundColor: "pink",
  },
  border: {
    // borderWidth: 1,
    // borderColor: "blue",
    // margin: 1,
  },

  // banderole area and inside
  banderoleArea: {
    // borderWidth: 2,
    // borderColor: "pink",
    // margin: 1,
  },
  plantTitle: { color: "black", fontSize: 20, fontStyle: "italic" },
  plantVarietyName: { color: colors.sage, fontSize: 20, fontStyle: "italic" },
  botanicalName: { color: "black", fontSize: 20, fontStyle: "italic" },

  // ---------------
  // plant time container
  plantTimeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  // plantTimeTitlesContainer: { borderColor: "green" },
  plantTimeTitle: {
    // borderColor: "orange",
    height: 14,
  },
  // titles on left side of calendar overview (for plant time)
  plantTimeTitleText: {
    // borderColor: "skyblue",
    fontSize: 9,
  },

  // month boxes and containers (for plant time)
  monthsOuterContainer: {
    // borderColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  monthsInnerContainer: {
    // borderColor: "orange",
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    height: 17,
    width: 300,
  },
  monthNameContainer: {
    // borderColor: "skyblue",
    width: 25,
    height: 14,
  },
  monthName: {
    // borderColor: "indigo",
    color: "black",
    fontSize: 9,
  },
  monthBox: {
    margin: 1,
    borderColor: "blue",
    borderWidth: 1,
    display: "flex",
    flex: 1,
    // justifyContent: "center", // why not work?
    alignItems: "center",
    // width: 25,
  },
  monthMarker: {
    // margin: 1,
    // borderColor: "blue",
    // borderWidth: 1,
    // flex: 1,
    // width: 25,
    // height: 7,
    // display: "flex",
    // flexDirection: "row",
    // alignContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "50%",
    backgroundColor: colors.sage25,
  },
  preculture: {
    backgroundColor: colors.tertiary,
  },
  directSeeding: {
    backgroundColor: colors.sage75,
  },

  // main content
  mainContent: { marginBottom: 90 },
});

export default detailedPlantPortraitStyles;
