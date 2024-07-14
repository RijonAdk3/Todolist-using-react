import React, { useState } from 'react';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [listTodo, setListTodo] = useState([]);
  const [currentTodo, setCurrentTodo] = useState({ text: '', index: null });

  const addList = (inputText) => {
    setListTodo([...listTodo, { text: inputText }]);
  };

  const deleteItem = (index) => {
    const newListTodo = listTodo.filter((_, i) => i !== index);
    setListTodo(newListTodo);
    if (currentTodo.index === index) setCurrentTodo({ text: '', index: null });
  };

  const editItem = (index) => {
    setCurrentTodo({ text: listTodo[index].text, index });
  };

  const editTodo = (inputText) => {
    const newListTodo = listTodo.map((item, index) =>
      index === currentTodo.index ? { ...item, text: inputText } : item
    );
    setListTodo(newListTodo);
    setCurrentTodo({ text: '', index: null });
  };

  return (
    <div className="main-container">
      <Navbar />
      <div className="center-container">
        <Todoinput
          addList={addList}
          editTodo={editTodo}
          currentTodo={currentTodo}
        />
        <TodoList listTodo={listTodo} deleteItem={deleteItem} editItem={editItem} />
      </div>
    </div>
  );
};

export default App;
