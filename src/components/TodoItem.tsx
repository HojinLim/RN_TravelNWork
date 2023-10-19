import React from "react";
import { Todo } from "../type";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../function/style/globalStyle";
import { EvilIcons, Feather } from "@expo/vector-icons";

const TodoItem = ({ todos, isWork , deleteTodo}: { todos: Todo[]; isWork: boolean; deleteTodo: (createdAt: string) => void }) => {


  return (
    // isWork에 따른 Todo 리스트 생성
    <View>
      {isWork
        ? todos
            .filter((todo: Todo) => todo.isWork)
            .map((todoItem: Todo) => (
              <View key={todoItem.created_at}>
                <Text style={globalStyles.todo}>{todoItem.contents}</Text>
                {/* 삭제 기능 */}
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => deleteTodo(todoItem.created_at)}
                  >
                    <EvilIcons name="trash" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            ))
        : todos
            .filter((todo: Todo) => !todo.isWork)
            .map((todoItem: Todo) => (
              <View key={todoItem.created_at}>
                <Text style={globalStyles.todo} key={todoItem.created_at}>
                  {todoItem.contents}
                </Text>
                {/* 삭제 기능 */}

                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => deleteTodo(todoItem.created_at)}
                  >
                    <EvilIcons name="trash" size={30} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
    </View>
  );
};
export default TodoItem;
