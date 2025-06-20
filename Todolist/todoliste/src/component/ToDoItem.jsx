import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '8px',
        fontSize: '16px'
      }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none'
          }}
        >
          {todo.text}
        </span>
        <button
          onClick={() => deleteTodo(index)}
          style={{
            backgroundColor: 'black',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;