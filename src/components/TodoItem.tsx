import React from "react";
import { Todo } from "../type";
import { Text, View } from "react-native";
import { globalStyles } from "../function/style/globalStyle";

const TodoItem = ({ todos, isWork }: { todos: Todo[]; isWork: boolean }) => {
  return (
    // isWork에 따른 Todo 리스트 생성
    <View>
      {isWork
        ? todos
            .filter((todo: Todo) => todo.isWork)
            .map((todoItem: Todo) => (
              <Text style={globalStyles.todo} key={todoItem.created_at}>
                {todoItem.contents}
              </Text>
            ))
        : todos
            .filter((todo: Todo) => !todo.isWork)
            .map((todoItem: Todo) => (
              <Text style={globalStyles.todo} key={todoItem.created_at}>
                {todoItem.contents}
              </Text>
            ))}
    </View>
  );
};
export default TodoItem;
