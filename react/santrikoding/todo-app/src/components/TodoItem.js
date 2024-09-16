const TodoItem = ({ todo, setRefresh }) => {

    const updateTodo = () => {
        todo.done = !todo.done;
        fetch("http://localhost:8000/todos/"+todo.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(todo),
        }).then(() => {
            console.log('todo updated');
            setRefresh(true);
        })
    }

    const deleteTodo = () => {
        fetch("http://localhost:8000/todos/"+todo.id, {
            method: "DELETE",
        }).then(() => {
            console.log('todo deleted');
            setRefresh(true);
        })
    }


    return (
        <div className="flex justify-between  items-center p-2 bg-purple-300 m-1 rounded-xl ">
            <li className={ "flex items-center"}>
                <i class={`${todo.done ? "material-icons text-sm pr-3" : "invisible material-icons text-sm pr-3"}`}>check_circle</i>
                <div onClick={updateTodo} className={`${todo.done ? "line-through" : ""}`}>{todo.title} </div>
                <i class="material-icons absolute right-5 text-white" onClick={deleteTodo}>delete_forever</i>
            </li>
        </div>
        
    )
}

export default TodoItem;