import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEY } from "../components/variable";
import { Todo } from "../type";
import { Alert } from "react-native";
import { toDosContext } from "../../App";

const loadTodos = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value) {
      const obj = JSON.parse(value);
      return obj;
    }
  } catch (e) {
    console.log(e);
  }
};

const saveToDos = async (todos: Todo[]) => {
  try {
    const jsonValue = JSON.stringify(todos);
    if (jsonValue) {
      await AsyncStorage.removeItem(STORAGE_KEY);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } else {
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    }
  } catch (e) {
    console.log(e);
  }
};

// const deleteToDo = async (created_at: string) => {
//   Alert.alert("Delete Todo", "Are you sure to delete Todo?", [
//     {
//       text: "delete",
//       onPress: () => {
//         toDosContext.
//       },
//     },
//     {
//       text: "No",
//       onPress: () => {
//         return;
//       },
//     },
//   ]);
// };

export { loadTodos, saveToDos };
