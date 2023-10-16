import React, { useState } from "react";
import Main from "./components/Main";

export const MyContext = React.createContext({});

export default function App() {
  // TODOS를 전역 관리 해줍니다.
  const [toDos, setToDos] = useState({ hi: "hi" });
  return (
    <MyContext.Provider value={toDos}>
      <Main />
    </MyContext.Provider>
  );
}
