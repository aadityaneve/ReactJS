import React, { useState } from 'react';

import './App.css';

const initialItems = new Array(29999999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29999998,
  };
});

function App() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  /**
   * useMemo will only return the value of the function
   */
  const selectedItem = React.useMemo(() => {
    console.log('USE MEMO');
    return items.find((item) => item.isSelected);
    // return items.find((item) => item.id === count);
  }, [items /* count */]);

  console.log('🚀 ~ selectedItem ~ selectedItem:', selectedItem);

  /**
   * useCallback will return the callback of the function
   */
  const selectedItemCallback = React.useCallback(() => {
    console.log('USE MEMO');
    return items.find((item) => item.isSelected);
    // return items.find((item) => item.id === count);
  }, [items /* count */]);

  console.log('🚀 ~ selectedItem ~ selectedItem:', selectedItem, selectedItemCallback()?.id);

  console.log('RE-RENDER');

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
