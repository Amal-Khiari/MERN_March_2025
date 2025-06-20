// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import DisplayStyled from './components/DisplayStyled.jsx';
import Display from './components/Display.jsx';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/:word/:color/:bgcolor" element={<DisplayStyled />} />
      <Route path="/:param" element={<Display />} />
    </Routes>
  );
}

export default App;