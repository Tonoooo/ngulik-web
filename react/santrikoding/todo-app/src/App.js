import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { useState } from "react";
import './index.css';

function App() {

  const [isRefresh, setIsRefresh] = useState(true);

  const setRefresh = (status) => {
    setIsRefresh(status);
  }
  
  // untuk menyalakan dummy rest api
  // npx json-server --watch data/db.json --port 8000
  return (
    <div className="flex justify-center h-full bg-slate-100">
      <div className="w-screen sm:w-6/12">
        <Header setRefresh={setRefresh}/>
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh}/>
      </div>
    </div>
  );
}

export default App;
