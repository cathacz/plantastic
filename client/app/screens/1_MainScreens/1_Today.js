import React, { useState, useEffect } from "react";

import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  TouchableHighlight,
  Platform,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Button,
  FlatList,
  Modal,
  Pressable,
  Animated,
  SwipeView,
} from "react-native";
// import { StatusBar } from "expo-status-bar";

// piece components >>
import NavMainTop from "../../components/2_NavComponents/NavMainTop";
import NavMainBottom from "../../components/2_NavComponents/NavMainBottom";
// import SearchMenu from "../3_SearchMenuScreens/SearchMenu";
// import Task from "../../components/Task";

// For styling >>
import StyleMain from "../../styles/StyleMain";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../../config/colors";

// weather imports
import useWeather from "../../components/WeatherAPI/useWeather";
import Weather from "../../components/WeatherAPI/Weather";
import Loading from "../../components/WeatherAPI/Loading";

// user >>
import exampleUser from "../../../assets/jsons/exampleUser.json";

const Today = ({ navigation, route }) => {
  console.log(route.params?.modalVisible);
  console.log("<<<<<<<<<<<<<<<<<<<<<<");

  const [currentDate, setCurrentDate] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [taskInputVisible, setTaskInputVisible] = useState(false);
  const [enteredTask, setEnteredTask] = useState("");
  const [allTasks, setAllTasks] = useState(exampleUser.userTasks); // start with userTasks already saved

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    // var hours = new Date().getHours(); //Current Hours
    // var min = new Date().getMinutes(); //Current Minutes
    // var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  // entered text becomes a task as a state >>
  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  // new task gets added to task list (newest in top) >>
  const addNewTaskHandler = () => {
    enteredTask.length > 1
      ? setAllTasks((tasks) => [
          { id: Math.random().toString(), value: enteredTask },
          ...tasks,
        ])
      : setEnteredTask("");
    setEnteredTask("");
  };

  // console.log("from Today: " + navigation);

  const weather = useWeather();
  // console.log("Look here -------------->");
  // console.log(weather);

  return (
    <SafeAreaView style={[StyleMain.container, styles.platformContainer]}>
      {/* ------------------------------------------------------------------------------ Banderole */}
      <View style={styles.banderoleStyle}>
        {/* <View
          style={{
            flex: 1,
            width: "100%",
          }}
        > */}
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("WeatherDetail", {
              propOne: "propOne props",
            })
          }
        >
          <View style={styles.weatherBanderole}>
            <View style={styles.userWrapper}>
              <Text style={styles.userGreeting}>
                Hej, {exampleUser.userData.username}!
              </Text>
              <Text style={{ fontSize: 16 }}>
                Heute warten {allTasks.length} Aufgaben auf dich!
              </Text>
            </View>

            {/* <View name="weather">
              {!weather ? <Loading /> : <Weather forecast={weather} />} */}
            {/* <Weather forecast={weather} /> */}
            {/* </View> */}
          </View>
        </TouchableHighlight>
        {/* </View> */}
      </View>

      {/* ------------------------------------------------------------------------------- Main Part */}
      {/* 
      <View style={{ marginTop: 70 }}>
        <Text>This is TODAY</Text>
      </View> */}

      {/* <Modal
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

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}

      {/* ------------------------------------------------------------------------------- Tasks */}
      <View style={styles.taskListArea}>
        {/* {useEffect(() => {
          console.log("I am working here!");
          setModalVisible(!modalVisible);
        }, [modalVisible])} */}

        {/* {modalVisible ? (
          <View style={styles.taskContainer}>
            <View style={styles.inputTitle}>
              <Text> New task: </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter new task here"
                style={styles.input}
                onChangeText={taskInputHandler}
                value={enteredTask}
                clearButtonMode="unless-editing"
                clearTextOnFocus={true}
                autoFocus={true}
              />
              <Pressable
                style={[styles.addButton, styles.buttonClose]}
                onPress={addNewTaskHandler}
              >
                <Text style={styles.addText}>Add</Text>
              </Pressable>
            </View>
          </View>
        ) : null} */}

        <View style={styles.taskContainer}>
          <View style={styles.inputTitle}>
            <Text> Neue Aufgabe: </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="neue Aufgabe"
              style={styles.input}
              onChangeText={taskInputHandler}
              value={enteredTask}
              clearButtonMode="unless-editing"
              clearTextOnFocus={true}
              autoFocus={true}
            />
            <Pressable
              style={[styles.addButton, styles.buttonClose]}
              onPress={addNewTaskHandler}
            >
              <Text style={styles.addText}>Adden</Text>
            </Pressable>
          </View>
        </View>
        {/* --------------------------- Daily View Thingie >> NOT permanent here */}
        <TouchableHighlight
          underlayColor={colors.sage25}
          style={styles.paleButton}
          onPress={() =>
            navigation.navigate("DailyView", {
              tasks: allTasks,
            })
          }
        >
          <View style={styles.buttonPale}>
            <Text style={styles.buttonTextPale}>Siehe Andere Aufgaben</Text>
          </View>
        </TouchableHighlight>
        {/* ------------------------------------------------------------------------------- List of tasks */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={allTasks}
          renderItem={(itemData) => (
            <View style={styles.listItem}>
              {/* <SwipeView onSwipedLeft={() => deleteItemById(item.id)} />
              <SwipeView
                disableSwipeToRight={false}
                renderVisibleContent={() => (
                  <View>
                    <Text style={styles.listItemText}>
                      {itemData.item.task || itemData.item.value}{" "}
                    </Text>
                  </View>
                )}
                renderRightView={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      alignItems: "center",
                      backgroundColor: "red",
                    }}
                  ></View>
                )}
                leftOpenValue={"this.leftOpenValue"}
                rightOpenValue={"this.rightOpenValue"}
                onSwipedLeft={
                  (() => alert("deleted"), this.deleteItemById(item.id))
                }
                swipeDuration={300}
                swipeToOpenPercent={40}
                disableSwipeToRight={true}
              /> */}

              <View style={styles.taskIconWrapper}>
                {/* <Text style={styles.listItemText}>icon</Text> */}
                <Image
                  source={require("../../../assets/icons/png/shovel.png")}
                  style={styles.taskIcon}
                />
              </View>
              <Text style={styles.listItemText}>
                {itemData.item.task || itemData.item.value}
              </Text>
            </View>
          )}
          style={styles.flatlist}
        />
      </View>

      {/* ------------------------------------------------------------------------------- Navigation Main Bottom */}
      <NavMainBottom navigation={navigation} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // banderole whole thing
  banderoleStyle: {
    width: "100%",
    // marginTop: 90,
    // height: 185, //for iOS
    // height: 220, //for android
    height: 200,
    backgroundColor: colors.sage5,
    // position: "absolute",
    // textAlign: "center",
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "grey",
  },
  // weather banderole
  weatherBanderole: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // alignContent: "center",
    // backgroundColor: "orange",
    // height: "100%",
  },
  // user area in banderole

  userWrapper: {
    width: "50%",
    // backgroundColor: "lightgrey",
    padding: 10,
  },

  // dunno what this is:
  // platformContainer: {
  //   flex: 1,
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  // ----------------------------------Modal

  // ----------------------------------Tasks
  taskListArea: {
    // marginTop: 250,
    marginBottom: 90,
    justifyContent: "center",
    alignContent: "center",
  },
  taskContainer: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 10,
  },
  // input box
  inputContainer: {
    // width: 30,
    display: "flex",
    flexDirection: "row",
    marginLeft: 10,
  },
  input: {
    justifyContent: "center",
    width: "80%",
    borderColor: colors.sage,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
  },
  // add task button
  addButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 8,
    // borderRadius: 4,
    elevation: 3,
    backgroundColor: colors.sage,
    // textAlign: "center",
    borderBottomRightRadius: 23,
    borderTopLeftRadius: 23,
    marginLeft: 8,
  },
  addText: {
    fontSize: 15,
    // lineHeight: 21,
    fontWeight: "bold",
    color: "white",
  },

  // list of tasks
  flatlist: {
    height: 350,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 2,
    width: "95%",
    margin: 5,
    marginLeft: 10,
    backgroundColor: colors.sage25,
    borderColor: colors.sage5,
    borderWidth: 1,
    borderStyle: "solid",
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  taskIconWrapper: {
    transform: [{ rotate: "90deg" }],
    // backgroundColor: "violet",
    // padding: 2,
    marginLeft: 7,
    width: 35,
    display: "flex",
    alignItems: "center",
  },
  taskIcon: {
    width: 30,
    height: 50,
    // backgroundColor: "orange",
  },
  listItemText: {
    fontSize: 19,
    // textAlign: "center",
    alignSelf: "center",
    // backgroundColor: "yellow",
    marginLeft: 10,
  },

  // anderes
  paleButton: {
    borderTopColor: colors.sage25,
    borderTopWidth: 1,
    borderStyle: "solid",
  },
  buttonPale: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonTextPale: {
    color: colors.sage25,
    fontSize: 25,
    margin: 7,
  },
  leafWrapper: {
    flexDirection: "row",
  },
  // userWrapper: { width: "50%" },
  userGreeting: {
    fontSize: 30,
    // width: " 50%",
    // alignSelf: "flex-start",
  },
});
export default Today;
