import { useEffect, useState } from "react";
import "./Todos.css";
import ListItem from "./ListItem";
import { localStorageData } from "../utils/localStorageData";

export default function Todos() {
  //all states of todos
  let [input, setInput] = useState("");
  const [todos, setTodos] = useState(localStorageData());

  const [isEdit, setIsEdit] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [updateInput, setUpdateInput] = useState("");

  //Data get from local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Input data of todo
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //adding todo
  const addTodo = () => {
    input.trim() === "" ? alert("Empty Input") : setTodos([...todos, input]);
    setInput("");
  };

  //delete todo
  const deleteTodo = (id) => {
    const filteredTodo = todos.filter((todo, index) => index !== id);
    setTodos(filteredTodo);
  };

  const getTodo = (id) => {
    setUpdateId(id);
    setIsEdit(true);
    setUpdateInput(todos[id]);
  };

  //update input data
  const updateTodoInput = (e) => {
    setUpdateInput(e.target.value);
  };

  //update todo
  const updateTodo = (id, e) => {
    e.preventDefault();
    todos[id] = updateInput;
    setTodos([...todos]);
    setIsEdit(false);
  };

  //complete data or not

  return (
    <div className="flex justify-center items-center bg-gray-300 min-h-screen">
      <div className="h-auto md:w-1/2 px-2 w-96 bg-white rounded-lg">
        <div className="input_text relative">
          <input
            className="text-sm h-12 w-full my-4 pr-20 md:pr-28 outline-none pl-8"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Write a new task"
          />
          <button
            onClick={addTodo}
            className="add_task text-sm transition-all hover:bg-blue-700 cursor-pointer text-white bg-blue-400 rounded-lg h-10 w-16 md:w-24 absolute right-1 top-[20px]"
          >
            Add Todo
          </button>
          <i className="absolute top-[27px] text-gray-600 text-xl left-2 fa fa-pencil-square"></i>
        </div>
        <ul className="all_tasks">
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              todo={todo}
              index={index}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              isEdit={isEdit}
              updateId={updateId}
              updateTodoInput={updateTodoInput}
              getTodo={getTodo}
              updateInput={updateInput}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
