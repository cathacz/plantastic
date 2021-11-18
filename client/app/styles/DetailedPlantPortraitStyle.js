import { StyleSheet } from "react-native";
import colors from "../config/colors";

const detailedPlantPortraitStyles = StyleSheet.create({
  // shared properties
  border: { borderWidth: 1, borderColor: "blue", margin: 1 },

  // banderole area and inside
  banderoleArea: {
    borderWidth: 2,
    borderColor: "pink",
    margin: 1,
  },
  plantTitle: { color: "black", fontSize: 20, fontStyle: "italic" },
  plantVarietyName: { color: colors.sage, fontSize: 20, fontStyle: "italic" },
  botanicalName: { color: "black", fontSize: 20, fontStyle: "italic" },

  // plant time container
  plantTimeContainer: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    // width: 30,
  },
  plantTimeTitle: {
    // width: 30,
  },
  // titles on left side of calendar overview (for plant time)
  plantTimeTitleText: {
    fontSize: 5,
    // width: "100%",
  },

  // month boxes and containers (for plant time)
  monthsOuterContainer: {
    display: "flex",
    flexDirection: "column",
  },
  monthsInnerContainer: {
    display: "flex",
    // flex: 1,
    flexDirection: "row",
  },
  monthBox: {
    // borderColor: "white",
    display: "flex",
    // flex: 1,
    flexDirection: "row",
    width: 25,
    height: 15,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  monthName: { borderColor: "yellow", color: "black", fontSize: 5 },

  // main content
  mainContent: { marginBottom: 90 },
});

export default detailedPlantPortraitStyles;
