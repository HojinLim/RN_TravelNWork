import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MyContext } from "../App";
import { theme } from "./style/theme";
import { changeWork } from "./function/changeWork";
const Main = () => {
  const store = useContext(MyContext);
//   console.log(store);

const [isWork, setWork] = useState(true);
const goWork = () => {
    setWork(true);
    changeWork(true);
  };
  const goTravel = () => {
    setWork(false);
    changeWork(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={goWork}>
          <Text
            style={{ ...styles.btnText, color: isWork ? "white" : theme.gray }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goTravel}>
          <Text
            style={{ ...styles.btnText, color: !isWork ? "white" : theme.gray }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// 스타일 영역
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
  textInput: {
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 15,
  },
  todo: {
    backgroundColor: "gray",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  todoText: {
    fontSize: 20,
    fontWeight: "500",
  },
});

export default Main;
