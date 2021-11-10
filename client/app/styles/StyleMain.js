import { StyleSheet } from "react-native";
import colors from "../config/colors";
import { Dimensions } from "react-native";

const StyleMain = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainText: {
    marginTop: 100,
    color: "black",
    fontSize: 40,
    fontStyle: "italic",
    position: "absolute",
    textAlign: "center",
  },
  // flexOneCenterRow: {
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // ------------------------------ Navigation Main Top
  navMainTop: {
    borderColor: "purple",
    borderWidth: 1,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  navTopElement: {
    borderColor: "green",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "baseline",
  },
  // Logo
  navTopElementImage: {
    borderColor: "red",
    borderWidth: 1,
    height: 50,
    width: 50,
  },
  // Plantastic Title
  navTopText: {
    fontSize: 30,
  },
  // SearchMenu Button
  searchMenuWrapperRight: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  searchMenuWrapper: {
    borderColor: "blue",
    borderWidth: 1,
    height: 50,
    width: 50,
  },
  rowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchMenuLeaf: {
    height: 23,
    width: 23,
    backgroundColor: colors.sage5,
    borderTopLeftRadius: 14,

    borderBottomRightRadius: 14,
  },
  // Add Button
  addWrapper: {
    flexDirection: "row",
    marginLeft: 10,
    width: 50,
    height: 50,
    backgroundColor: colors.sage5,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 30,
  },
  // -------------------------------------- Banderole
  banderole: {
    marginTop: 90,
    height: 150,
    width: "100%",
    backgroundColor: colors.sage5,

    // position: "absolute",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },

  // -------------------------------------- Navigation Main Bottom
  navMainBottom: {
    backgroundColor: "white",
    borderColor: "white",
    borderTopColor: colors.sage25,
    borderWidth: 1,
    borderStyle: "solid",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    height: 90,
    position: "absolute",
    bottom: 0,
  },
  navItem: {
    width: "25%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  navElement: {
    alignItems: "center",
    justifyContent: "center",
  },
  navElementImage: {
    height: 50,
    width: 50,
  },
  navText: {
    marginTop: 5,
  },
  quick: {
    alignItems: "center",
    justifyContent: "center",
    top: 400,
  },

  // -------------------------------------------------- active Tap (where am I?)
  active: { backgroundColor: colors.sage25 },
});

export default StyleMain;
