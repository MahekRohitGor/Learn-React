import React from "react";
import Header from './components/Header';
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Counter from "./components/Counter";
import { useEffect } from "react";
import "./index.css"

const App = () =>{
  return (
    <div className="todo-container">
      <Counter />
      {/* <Counter />
      <Counter />
      <Counter /> */}
      <Header heading="MyTodoie"/>
      <TodoItem text="Eat"/>
      <TodoItem text="Sleep"/>
      <TodoItem text="Code" completed = {true}/>
      <TodoItem text="Code"/>
      <TodoItem text="Repeat"/>
      <Button />
    </div>
  );
};


export default App;
