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
  labelsContainer: {
    display: "flex",
    alignItems: "center",
  },
  plantTitle: { color: "black", fontSize: 20, fontWeight: "bold" },
  plantVarietyName: {
    color: colors.sage,
    fontSize: 20,
    fontStyle: "italic",
    // padding: 2,
  },
  botanicalName: {
    color: "black",
    fontSize: 16,
    fontStyle: "normal",
    marginBottom: 8,
  },

  // ---------------
  // plant time container
  plantTimeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  // plantTimeTitlesContainer: { borderColor: "green" },
  plantTimeTitle: {
    // borderWidth: 1,
    // borderColor: "orange",
    height: 20,
    display: "flex",
  },
  // titles on left side of calendar overview (for plant time)
  plantTimeTitleText: {
    // borderColor: "skyblue",
    // borderWidth: 1,

    fontSize: 9,
    padding: 2,
  },

  // month boxes and containers (for plant time)
  monthsOuterContainer: {
    // borderColor: "green",
    display: "flex",
    flexDirection: "column",
  },
  monthsInnerContainer: {
    // borderWidth: 1,
    // borderColor: "orange",
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    height: 20,
    width: 300,
    padding: 1,
  },
  monthNameContainer: {
    // borderColor: "skyblue",
    width: 25,
    alignSelf: "flex-end",
  },
  monthName: {
    // borderColor: "indigo",
    color: "black",
    fontSize: 9,
  },
  monthBox: {
    margin: 1,
    // borderColor: "blue",
    // borderWidth: 1,
    // padding: 1,
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
