import React, { useState, useEffect } from 'react';

import * as sortingAlgorithms from './sortingAlgorithms';
import './App.css';

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function App() {
  const [array, setArray] = useState([]);
  const [range, setRange] = useState(20);

  useEffect(() => {
    resetArray(range);
  }, [range]);

  const handleRange = (event) => {
    setRange(event.target.value);
  };

  const resetArray = (range) => {
    const array = [];
    for (let i = 0; i < range; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    setArray(array);
  };

  const mergeSort = () => {
    const animations = sortingAlgorithms.mergeSort(array);
    const arrayBars = document.querySelectorAll('.arrayContainer__bar');
    for (let i = 0; i < animations.length; i++) {
      const { comparison, swap } = animations[i];
      console.log(comparison, swap);
      setTimeout(() => {
        // arrayBars[comparison[0]].style.backgroundColor = 'red';
        // arrayBars[comparison[1]].style.backgroundColor = 'red';
        setTimeout(() => {
          arrayBars[swap[0]].style.height = `${array[swap[0]]}px`;
          arrayBars[swap[1]].style.height = `${array[swap[1]]}px`;
          arrayBars[swap[0]].textContent = `${array[swap[0]]}`;
          arrayBars[swap[1]].textContent = `${array[swap[1]]}`;
          // arrayBars[swap[0]].style.backgroundColor = 'green';
          // arrayBars[swap[1]].style.backgroundColor = 'green';
        }, i * 10);
      }, i * 10);
    }
  };

  const quickSort = () => {};
  const heapSort = () => {};
  const bubbleSort = () => {};

  return (
    <div className="app">
      <div className="actions">
        <input
          type="range"
          min="5"
          defaultValue="20"
          max="30"
          onChange={handleRange}
        />
        <button onClick={() => resetArray(range)}>Generate New Array</button>
        <button onClick={() => mergeSort()}>Merge Sort</button>
        <button onClick={() => quickSort()}>Quick Sort</button>
        <button onClick={() => heapSort()}>Heap Sort</button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
      </div>
      <div className="arrayContainer">
        {array.map((value, idx) => (
          <div
            className="arrayContainer__bar"
            style={{ height: `${value}px`, backgroundColor: 'lightgray' }}
            key={idx}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
