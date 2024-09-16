import TodoItem from "./TodoItem";
import { useEffect, useState } from "react";

const TodoList = ({isRefresh, setRefresh}) => {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // memanggil api untuk mengambil data todos
   fetch("http://localhost:8000/todos")
   .then((res) => {
      return res.json();
    })
    .then((data) => {
      setRefresh(false)
      // ketika Rest API sukses, simpan data dari response ke dalam state lokal
      setTodos(data);
    })
    .catch((err) => {
      if (err.name = "AbortError"){
        console.log("fetch aborted");
      }
    });

  }, [isRefresh, setRefresh]);  

  return (
    <div className="p-4 bg-white mx-4 mt-8 rounded-xl shadow-xl"> {/* Container untuk ul */}
      <ul id="todo-list" className="relative m-0 p-0 cursor-pointer [&>*:nth-child(odd)]:bg-purple-200 [&>*:nth-child(even)]:bg-purple-300">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} setRefresh={setRefresh}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;