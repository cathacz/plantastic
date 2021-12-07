import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  View,
  Image,
  Modal,
  Pressable,
} from "react-native";

import colors from "../../config/colors";
// import Today from "../../screens/ComponentsTest/Today";
// import SearchMenu from "../../screens/SearchMenu";

import StyleMain from "../../styles/StyleMain";

function NavMainTop({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={StyleMain.navMainTop}>
      {/* -------------------------------------------------------- Logo */}
      {/* <View style={StyleMain.navTopItem}> */}
      <View style={StyleMain.navTopElement}>
        <Image
          source={require("../../../assets/icons/png/plantastic.png")}
          style={StyleMain.navTopElementImage}
        />
        <Text style={StyleMain.navTopText}>Plantastic</Text>
      </View>
      {/* </View> */}
      {/* ---------------------------------- SearchMenu (search button) */}
      <View
        name="hamburgerMenu/searchButton"
        style={StyleMain.searchMenuWrapperRight}
      >
        <TouchableOpacity
          style={StyleMain}
          onPress={() =>
            navigation.navigate("SearchMenu", {
              propOne: "propOne props",
            })
          }
        >
          <View style={StyleMain.searchMenuWrapper}>
            <View style={StyleMain.rowSpaceBetween}>
              <View style={StyleMain.searchMenuLeaf}></View>
              <View style={StyleMain.searchMenuLeaf}></View>
            </View>

            <View style={StyleMain.rowSpaceBetween}>
              <View style={StyleMain.searchMenuLeaf}></View>
              <View style={StyleMain.searchMenuLeaf}></View>
            </View>
          </View>
        </TouchableOpacity>
        {/* ------------------------------------ Add Task (plus button) */}
        <TouchableOpacity
          style={StyleMain.addWrapper}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <View style={StyleMain}>
            <Text style={StyleMain.addText}>+</Text>
          </View>
        </TouchableOpacity>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   setModalVisible(!modalVisible);
          // }}
        >
          <View style={styles.modalBox}>
            <View style={styles.modalView}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add Plant</Text>
              </Pressable>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Add Task</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 70,
    borderRadius: 30,
    // backgroundColor: "red",
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    // borderRadius: 20,
    width: 150,
    margin: 10,
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 10,
    elevation: 2,
    // backgroundColor: colors.sage75,
  },
  buttonOpen: {
    backgroundColor: colors.sage75,
  },
  buttonClose: {
    backgroundColor: colors.sage75,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  // modalText: {
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
});

export default NavMainTop;

{
  /* <Route exact path="/" component={Home} /> */
}
{
  /* <Route path="/searchMenu" component={SearchMenu} /> */
}
{
  /* <Route path="/today" component={Today} /> */
}
