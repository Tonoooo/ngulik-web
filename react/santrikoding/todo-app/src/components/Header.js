import { useState } from "react";

const Header = ({setRefresh}) => {

    const [title, setTitle] = useState('');

    // fungsi untuk menambah data todo melalui API ketika tombol "Add" di klik
    const addTodo = () => {
        const newTodo = {title, done: false}

        fetch('http://localhost:8000/todos', {
            method: 'POST',
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTodo)
        }).then(() => {
            // ketika sukses menambah data, reset form dengan mengeset state title menjadi empty string 
            setTitle('');
            setRefresh(true);
        })
    }



    return (
        <div id="todo-header" className="header">
            <div className="flex justify-center mb-8 mt-4 text-3xl">
                <h2 className="text-sky-600 font-bold">Todo </h2><h2 className="text-purple-900 font-bold"> App</h2>
            </div>
            

            <div className="flex justify-center mb-4">
                <input className="shadow-md rounded-3xl py-2 pl-4 pr-7 w-auto max-w-xs placeholder:italic" 
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add Todo...."
                />
                <span className="absolute bg-purple-400 p-3 cursor-pointer rounded-xl shadow-md translate-x-32 -translate-y-1 w-auto" onClick={addTodo}>+Add</span>
            </div>
            
        </div>
    )
}

export default Header;