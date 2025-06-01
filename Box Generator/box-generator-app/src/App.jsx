import React, { useState } from 'react';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes([...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Box Generator Master</h1>
      <BoxForm onAddBox={addBox} />
      <BoxDisplay boxes={boxes} onRemoveBox={removeBox} />
    </div>
  );
}

export default App;