import React, { useState, useEffect } from 'react';
import './Todoinput.css';

const TodoInput = ({ addList, editTodo, currentTodo }) => {
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setInputText(currentTodo.text || '');
  }, [currentTodo]);

  const handleAddEdit = () => {
    if (inputText.trim()) {
      if (currentTodo.index !== null) {
        editTodo(inputText);
      } else {
        addList(inputText);
      }
      setInputText('');
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your to-do task"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddEdit}>
        {currentTodo.index !== null ? 'Edit' : '+'}
      </button>
    </div>
  );
};

export default TodoInput;
