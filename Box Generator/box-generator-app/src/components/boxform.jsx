import React, { useState } from 'react';
import '../App.css';

function BoxForm({ onAddBox }) {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!color || !size) return;

    const newBox = {
      id: Date.now(),
      color,
      size: size + 'px'
    };

    onAddBox(newBox);
    setColor('');
    setSize('');
  };

  return (
    <form className="box-form" onSubmit={handleSubmit}>
      <h2>Create a New Box</h2>

      <div className="form-group">
        <label>Color:</label>
        <input
          type="text"
          placeholder="e.g. red or #ff0000"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Size (px):</label>
        <input
          type="number"
          placeholder="e.g. 100"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </div>

      <button type="submit">Add </button>
    </form>
  );
}

export default BoxForm;