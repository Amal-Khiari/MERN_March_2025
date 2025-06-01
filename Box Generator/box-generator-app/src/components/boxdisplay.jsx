import React from 'react';
import '../App.css';

function BoxDisplay({ boxes, onRemoveBox }) {
  return (
    <div className="box-container">
      {boxes.map((box) => (
        <div key={box.id} className="box-wrapper">
          <button
            className="close-button"
            onClick={() => onRemoveBox(box.id)}
          >
            ×
          </button>
          <div
            className="color-box"
            style={{
              backgroundColor: box.color,
              width: box.size || '100px',
              height: box.size || '100px'
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default BoxDisplay;