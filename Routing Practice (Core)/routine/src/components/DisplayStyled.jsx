// components/DisplayStyled.jsx
import { useParams } from 'react-router-dom';

const DisplayStyled = () => {
  const { word, color, bgcolor } = useParams();

  const style = {
    color: color,
    backgroundColor: bgcolor,
    padding: '10px'
  };

  return (
    <h1 style={style}>{word}</h1>
  );
};

export default DisplayStyled;