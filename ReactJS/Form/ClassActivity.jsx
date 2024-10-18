import React, { useState } from 'react';

const ClassActivity = () => {
  const [isListVisible, setIsListVisible] = useState(true);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <h2>Conditional Rendering and State Management Task</h2>
      <button onClick={toggleListVisibility}>
        {isListVisible ? 'Hide List' : 'Show List'}
      </button>
      {isListVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClassActivity;