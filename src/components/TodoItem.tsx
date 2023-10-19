import React from "react";
import { Todo } from "../type";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../function/style/globalStyle";
import { EvilIcons, Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

const TodoItem = ({
  todoItem,
  deleteTodo,
  editTodo,
  doneTodo,
}: {
  todoItem: Todo;
  deleteTodo: (createdAt: string) => void;
  editTodo: (createdAt: string) => void;
  doneTodo: (createdAt: string) => void;
}) => {
  return (
    <View key={todoItem.created_at}>
      <Text
        style={
          todoItem.isDone
            ? { ...globalStyles.todo, textDecorationLine: "line-through" }
            : globalStyles.todo
        }
      >
        {todoItem.contents}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Checkbox
          value={todoItem.isDone}
          onValueChange={() => doneTodo(todoItem.created_at)}
        />
        <TouchableOpacity onPress={() => deleteTodo(todoItem.created_at)}>
          <EvilIcons name="trash" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => editTodo(todoItem.created_at)}>
          <Feather name="edit-3" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default TodoItem;
