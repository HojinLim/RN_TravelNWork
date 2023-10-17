interface Todo {
  created_at: string;
  contents: string;
  isWork: boolean
  isDone: boolean;
}

interface TodoContext {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export { Todo, TodoContext };
