import { useState } from "react";
import "../App.css";
import Header from "../components/header/Header";
import InputForm from "../components/inputForm/InputForm";
import List from "../components/list/List";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: new Date().getTime(),
      title: "React 공부하기",
      body: "리액트 기초 공부하기",
      isDone: false,
    },
    {
      id: new Date().getTime() + 1,
      title: "Javascript 공부하기",
      body: "바닐라 자바스크립트 프로젝트 만들기",
      isDone: true,
    },
  ]);

  return (
    <div id="container">
      <Header />
      <InputForm todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoList;
