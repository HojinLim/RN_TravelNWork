import React from "react";
import { Todo } from "../type";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../function/style/globalStyle";
import { EvilIcons, Feather } from "@expo/vector-icons";

const TodoItem = ({
  todoItem,
  deleteTodo,
  editTodo,
}: {
  todoItem: Todo;
  deleteTodo: (createdAt: string) => void;
  editTodo: (createdAt: string) => void;
}) => {
  return (
    <View key={todoItem.created_at}>
      <Text style={globalStyles.todo}>{todoItem.contents}</Text>
      <View style={{ flexDirection: "row" }}>
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
