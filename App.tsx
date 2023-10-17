import React, { createContext, useEffect, useState } from "react";
import Main from "./src/components/Main";
import { Todo, TodoContext } from "./src/type";
import { loadTodos } from "./src/function/aboutTodo";

export const toDosContext = createContext<TodoContext>({
  toDos: [],
  setToDos: () => {},
});

export default function App() {
  // TODOS를 전역 관리 해줍니다.
  // console.log(loadTodos())
  const [toDos, setToDos] = useState<Todo[]>([]);
  const init = async () => {
    setToDos(await loadTodos());
  };


  useEffect(() => {
    init();
  }, []);

  return (
    <toDosContext.Provider value={{ toDos, setToDos }}>
      <Main />
    </toDosContext.Provider>
  );
}
