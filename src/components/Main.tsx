import React, { useContext, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { toDosContext } from "../../App";
import { theme } from "../function/style/theme";
import { changeWork } from "../function/changeWork";
import { Todo } from "../type";
import { loadTodos, saveToDos } from "../function/aboutTodo";
import TodoItem from "./TodoItem";

const Main = () => {
  const todoContext = useContext(toDosContext);

  const [isWork, setWork] = useState(true);
  const goWork = () => {
    setWork(true);
    changeWork(true);
  };
  const goTravel = () => {
    setWork(false);
    changeWork(false);
  };

  const [inputText, setInputText] = useState<string>("");
  const onChangeText = (payload: string) => {
    setInputText(payload);
  };

  useEffect(() => {
    // 마운트 될 때 실행
    // loadTodos();
    // loadIsWork();
    // console.log(isWork)
  }, []);
  const onSubmit = async () => {
    if (inputText === "") {
      alert("빈 값이 있습니다");
      // console.log(todoContext.toDos)
      return;
    }
    setInputText("");
    const newToDo: Todo = {
      created_at: new Date().toString(),
      contents: inputText,
      isWork,
      isDone: false,
    };
    todoContext.setToDos((prev) => [...prev, newToDo]);
    await saveToDos(todoContext.toDos);
  };
  const check = async () => {
    console.log(todoContext.toDos);
  };

  const deleteTodo = (createdAt: string) => {
    Alert.alert("Delete Todo", "Are you sure to delete Todo?", [
      {
        text: "delete",
        onPress: () => {
          const updatedTodos = todoContext.toDos.filter(
            (todo: Todo) => todo.created_at !== createdAt
          );
          todoContext.setToDos(updatedTodos);
          saveToDos(updatedTodos)
        },
      },
      {
        text: "No",
        onPress: () => {
          return;
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* 일, 여행 변경 토글 */}
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
      {/* Todo 입력 폼 */}
      <View>
        <TextInput
          onEndEditing={onSubmit}
          onChangeText={onChangeText}
          value={inputText}
          placeholder={
            isWork ? "Please write what to do" : "Let's write some plan"
          }
          style={styles.textInput}
        ></TextInput>
      </View>
      {/* TODOS 리스트  */}
      <ScrollView>
        {isWork ? (
          <TodoItem
            todos={todoContext.toDos}
            isWork={true}
            deleteTodo={deleteTodo}
          />
        ) : (
          <TodoItem
            todos={todoContext.toDos}
            isWork={false}
            deleteTodo={deleteTodo}
          />
        )}
      </ScrollView>
    
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
