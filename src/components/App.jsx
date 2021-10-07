import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos]);

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const fetchTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <Container
      className='d-flex align-items-center justify-content-center mt-5'
      style={{}}>
      <div className='w-100' style={{ maxWidth: "400px" }}>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
          loadError={loadError}
          setLoadError={setLoadError}
        />
      </div>
    </Container>
  );
};

export default App;
