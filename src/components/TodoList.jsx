import React from "react";
import { Card, Button, Form, ListGroup } from "react-bootstrap";
import { MdDone, MdDeleteForever } from "react-icons/md";

const AddTodo = ({ todos, setTodos, input, setInput }) => {
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.length < 1) {
      return;
    }
    setTodos([
      ...todos,
      {
        text: input,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInput("");
  };

  return (
    <Form>
      <Form.Group className='mb-3 mx-3'>
        <Form.Label>Add a Task</Form.Label>
        <div className='d-flex' style={{ justifyContent: "space-between" }}>
          <Form.Control
            className='mb-1'
            type='text'
            value={input}
            style={{ border: "1px solid black" }}
            placeholder='Task Name'
            onChange={(e) => {
              setInput(e.target.value);
            }}></Form.Control>
          <Button
            className='h-100 mx-1'
            variant='secondary'
            type='submit'
            onClick={addTodoHandler}>
            Add
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

const Todo = ({ todos, setTodos, todo }) => {
  const completeTodoHandler = (e) => {
    const tempTodos = [...todos];
    tempTodos.map((item) => {
      if (item.id === todo.id) {
        item.completed = !item.completed;
        setTodos(tempTodos);
        return;
      }
    });
  };

  const deleteTodoHandler = (e) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
  };

  return (
    <ListGroup.Item
      className='mb-2 d-flex'
      style={{
        borderRadius: "14px",
        justifyContent: "space-between",
      }}>
      <div
        className='d-flex align-items-center justify-content-center'
        style={{
          fontSize: "15px",
          textDecoration: todo["completed"] ? "line-through" : "none",
        }}>
        {todo["text"]}
      </div>
      <div className='d-flex' style={{ justifyContent: "space-between" }}>
        <Button
          type='reset'
          variant='primary'
          a
          className=' d-flex align-items-center justify-content-center mx-1'
          style={{ height: "30px" }}
          onClick={completeTodoHandler}>
          <MdDone />
        </Button>
        <Button
          type='reset'
          variant='danger'
          className=' d-flex align-items-center justify-content-center'
          style={{ height: "30px" }}
          onClick={deleteTodoHandler}>
          <MdDeleteForever />
        </Button>
      </div>
    </ListGroup.Item>
  );
};

const List = ({ todos, setTodos }) => {
  return (
    <ListGroup className='mx-2' variant='flush'>
      {todos.map((todo) => {
        return (
          <Todo
            key={Math.random() * 1000}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        );
      })}
    </ListGroup>
  );
};

const TodoList = ({ todos, setTodos, input, setInput }) => {
  return (
    <Card style={{ border: "1px solid black" }}>
      <Card.Body>
        <Card.Title
          className='text-center'
          style={{ color: "black", fontSize: "24px" }}>
          <h2>Todo List</h2>
        </Card.Title>
        <Card.Subtitle
          className='text-center mb-3'
          style={{ color: "grey", textTransform: "capitalize" }}>
          Add your tasks here
        </Card.Subtitle>
        <AddTodo
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
        />
        <List todos={todos} setTodos={setTodos} />
      </Card.Body>
    </Card>
  );
};

export default TodoList;
