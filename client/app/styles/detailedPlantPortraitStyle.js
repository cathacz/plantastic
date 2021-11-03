import { StyleSheet } from "react-native";
import colors from "../config/colors";

const detailedPlantPortraitStyles = StyleSheet.create({
  banderoleArea: {
    borderWidth: 2,
    borderColor: "pink",
  },
  plantTitle: { color: "black", fontSize: 20, fontStyle: "italic" },
  plantVarietyName: { color: "black", fontSize: 20, fontStyle: "italic" },
  botanicalName: { color: "black", fontSize: 20, fontStyle: "italic" },
  mainContent: { marginBottom: 90 },
});

export default detailedPlantPortraitStyles;
