import React from 'react';
import './TodoList.css';

const TodoList = ({ listTodo, deleteItem, editItem }) => {
  return (
    <div className="listing">
      {listTodo.map((item, index) => (
        <div key={index} className="list-item">
          {item.text}
          <div>
            <span className="icon" onClick={() => editItem(index)}>
              <i className="edit">Edit</i>
            </span>
            <span className="icon" onClick={() => deleteItem(index)}>
              <i className="delete">Delete</i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
