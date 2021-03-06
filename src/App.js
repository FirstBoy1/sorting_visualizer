import React, { useState, useEffect } from 'react';

import * as sortingAlgorithms from './sortingAlgorithms';
import './App.css';

// START UTILS

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// blue at initial
// green at comparison
// red if swapabble
// green after swap
// purple after sort

const colors = {
  red: '#ff4b5c',
  green: '#28df99',
  blue: '#40a8c4',
  purple: '#d291bc',
};

// END UTILS

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

  // blue at initial
  // green at comparison
  // red if swapabble
  // green after swap
  // purple after sort

  const mergeSort = async () => {
    const animations = sortingAlgorithms.mergeSort(array);
    const arrayBars = document.querySelectorAll('.arrayContainer__bar');
    for (let i = 0; i < animations.length; i++) {
      const { /* comparison, */ swap } = animations[i];
      await sleep(i + 20);
      arrayBars[swap[0]].style.backgroundColor = colors.red;
      arrayBars[swap[1]].style.backgroundColor = colors.red;
      arrayBars[swap[0]].style.height = `${array[swap[0]]}px`;
      arrayBars[swap[1]].style.height = `${array[swap[1]]}px`;
      if (array.length <= 20) {
        arrayBars[swap[0]].textContent = `${array[swap[0]]}`;
        arrayBars[swap[1]].textContent = `${array[swap[1]]}`;
      }
      await sleep(i + 20);
      arrayBars[swap[0]].style.backgroundColor = colors.green;
      arrayBars[swap[1]].style.backgroundColor = colors.green;
    }
  };

  const quickSort = () => {};
  const heapSort = () => {};

  const bubbleSort = async () => {
    const originalArrayCopy = [...array];
    const animations = sortingAlgorithms.bubbleSort(array);
    const arrayBars = document.querySelectorAll('.arrayContainer__bar');
    for (let i = 0; i < animations.length; i++) {
      const { comparison, swap } = animations[i];
      arrayBars[comparison[0]].style.backgroundColor = colors.green;
      arrayBars[comparison[1]].style.backgroundColor = colors.green;
      await sleep(i * 10);
      if (swap && swap[0] !== swap[1]) {
        arrayBars[swap[0]].style.backgroundColor = colors.red;
        arrayBars[swap[1]].style.backgroundColor = colors.red;
        await sleep(i * 10);
        [originalArrayCopy[swap[0]], originalArrayCopy[swap[1]]] = [
          originalArrayCopy[swap[1]],
          originalArrayCopy[swap[0]],
        ];
        arrayBars[swap[0]].style.height = `${originalArrayCopy[swap[0]]}px`;
        arrayBars[swap[1]].style.height = `${originalArrayCopy[swap[1]]}px`;
        arrayBars[swap[0]].textContent = `${originalArrayCopy[swap[0]]}`;
        arrayBars[swap[1]].textContent = `${originalArrayCopy[swap[1]]}`;
      } else {
        arrayBars[comparison[0]].style.backgroundColor = colors.blue;
        arrayBars[comparison[1]].style.backgroundColor = colors.blue;
      }
      await sleep(i * 10);
      arrayBars[comparison[0]].style.backgroundColor = colors.purple;
      arrayBars[comparison[1]].style.backgroundColor = colors.purple;
    }
  };

  const insertionSort = async () => {
    const originalArrayCopy = [...array];
    const animations = sortingAlgorithms.insertionSort(array);
    const arrayBars = document.querySelectorAll('.arrayContainer__bar');
    for (let i = 0; i < animations.length; i++) {
      const { comparison, swap } = animations[i];
      arrayBars[comparison[0]].style.backgroundColor = colors.green;
      arrayBars[comparison[1]].style.backgroundColor = colors.green;
      await sleep(i * 10);
      if (swap && swap[0] !== swap[1]) {
        arrayBars[swap[0]].style.backgroundColor = colors.red;
        arrayBars[swap[1]].style.backgroundColor = colors.red;
        await sleep(i * 10);
        [originalArrayCopy[swap[0]], originalArrayCopy[swap[1]]] = [
          originalArrayCopy[swap[1]],
          originalArrayCopy[swap[0]],
        ];
        arrayBars[swap[0]].style.height = `${originalArrayCopy[swap[0]]}px`;
        arrayBars[swap[1]].style.height = `${originalArrayCopy[swap[1]]}px`;
        arrayBars[swap[0]].textContent = `${originalArrayCopy[swap[0]]}`;
        arrayBars[swap[1]].textContent = `${originalArrayCopy[swap[1]]}`;
      } else {
        arrayBars[comparison[0]].style.backgroundColor = colors.blue;
        arrayBars[comparison[1]].style.backgroundColor = colors.blue;
      }
      await sleep(i * 10);
      arrayBars[comparison[0]].style.backgroundColor = colors.purple;
      arrayBars[comparison[1]].style.backgroundColor = colors.purple;
    }
  };

  // alert with comparison which is null at some places
  const selectionSort = async () => {
    const originalArrayCopy = [...array];
    const animations = sortingAlgorithms.selectionSort(array);
    const arrayBars = document.querySelectorAll('.arrayContainer__bar');
    for (let i = 0; i < animations.length; i++) {
      const { comparison, swap } = animations[i];
      if (comparison) {
        arrayBars[comparison[0]].style.backgroundColor = colors.green;
        arrayBars[comparison[1]].style.backgroundColor = colors.green;
      }
      await sleep(i * 10);
      if (swap && swap[0] !== swap[1]) {
        arrayBars[swap[0]].style.backgroundColor = colors.red;
        arrayBars[swap[1]].style.backgroundColor = colors.red;
        await sleep(i * 10);
        [originalArrayCopy[swap[0]], originalArrayCopy[swap[1]]] = [
          originalArrayCopy[swap[1]],
          originalArrayCopy[swap[0]],
        ];
        arrayBars[swap[0]].style.height = `${originalArrayCopy[swap[0]]}px`;
        arrayBars[swap[1]].style.height = `${originalArrayCopy[swap[1]]}px`;
        arrayBars[swap[0]].textContent = `${originalArrayCopy[swap[0]]}`;
        arrayBars[swap[1]].textContent = `${originalArrayCopy[swap[1]]}`;
      } else {
        if (comparison) {
          arrayBars[comparison[0]].style.backgroundColor = colors.blue;
          arrayBars[comparison[1]].style.backgroundColor = colors.blue;
        }
      }
      await sleep(i * 10);
      if (comparison) {
        arrayBars[comparison[0]].style.backgroundColor = colors.purple;
        arrayBars[comparison[1]].style.backgroundColor = colors.purple;
      }
    }
  };

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
        <button disabled onClick={() => quickSort()}>
          Quick Sort
        </button>
        <button disabled onClick={() => heapSort()}>
          Heap Sort
        </button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
        <button onClick={() => insertionSort()}>Insertion Sort</button>
        <button onClick={() => selectionSort()}>Selection Sort</button>
      </div>
      <div className="arrayContainer">
        {array.map((value, idx) => (
          <div
            className="arrayContainer__bar"
            style={{ height: `${value}px`, backgroundColor: colors.blue }}
            key={`${idx}${value}${Date.now()}`}
          >
            {array.length <= 20 && value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
