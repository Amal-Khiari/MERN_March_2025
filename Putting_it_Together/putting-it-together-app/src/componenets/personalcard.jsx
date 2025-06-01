import React, { useState } from 'react';

const PersonCard = (props) => {
  const { firstName, lastName, hairColor, age: initialAge } = props;
  const [age, setAge] = useState(initialAge);

  const handleBirthdayClick = () => {
    setAge((prevAge) => prevAge + 1);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '300px' }}>
      <h2>{lastName}, {firstName}</h2>
      <p>Age: {age}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={handleBirthdayClick}>Birthday Button for {firstName}</button>
    </div>
  );
};

export default PersonCard;