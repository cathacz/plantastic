import { StyleSheet } from "react-native";
import colors from "../config/colors";

const detailedPlantPortraitStyles = StyleSheet.create({
  // shared properties >>
  noStyle: {
    backgroundColor: "pink",
  },
  border: {
    // borderWidth: 1,
    // borderColor: "blue",
    // margin: 1,
  },

  // banderole area and inside >>
  banderoleArea: {
    // borderWidth: 2,
    // borderColor: "pink",
    // margin: 1,
  },

  // labels >>
  labelsContainer: {
    display: "flex",
    alignItems: "center",
  },
  plantTitle: { color: "black", fontSize: 20, fontWeight: "bold" },
  plantVarietyName: {
    color: colors.sage,
    fontSize: 20,
    fontStyle: "italic",
  },
  botanicalName: {
    color: "black",
    fontSize: 16,
    fontStyle: "normal",
    marginBottom: 8,
  },

  // ---------------

  // legend for colors >>
  legendContainer: {
    borderWidth: 1,
    borderColor: "green",
    flexDirection: "row",
  },
  legendItem: {
    // borderWidth: 1,
    // borderColor: "yellow",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  legendItemColor: {
    width: 10,
    height: 10,
  },
  precultureColor: { backgroundColor: colors.tertiary },
  directSeedColor: { backgroundColor: colors.sage75 },
  legendItemText: {
    // borderWidth: 1,
    // borderColor: "pink",
    fontSize: 10,
    marginLeft: 3,
    marginRight: 3,
  },

  // ---------------

  // plant time container >>
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
  // titles on left side of calendar overview (for plant time) >>
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
    display: "flex",
    flex: 1,
    // justifyContent: "center", // why not work?
    alignItems: "center",
  },
  monthMarker: {
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

  // main content >>
  mainContent: { marginBottom: 90 },
});

export default detailedPlantPortraitStyles;
