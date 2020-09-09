// Bubble Sort
export function bubbleSort(arr) {
  const animations = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const animation = { comparison: [i, j] };
      if (arr[j] < arr[i]) {
        animation.swap = [i, j];
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      animations.push(animation);
    }
  }

  return animations;
}

// Insertion Sort
export function insertionSort(arr) {
  const animations = [];

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    while (arr[j] < arr[j - 1]) {
      animations.push({ comparison: [j, j - 1], swap: [j, j - 1] });
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j -= 1;
    }
  }

  return animations;
}

// Selection Sort
export function selectionSort(arr) {
  const animations = [];
  for (let i = 0; i < arr.length; i++) {
    let swapIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[swapIdx]) swapIdx = j;
    }
    animations.push({ swap: [i, swapIdx] });
    [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
  }

  return animations;
}

// Merge Sort
export function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const animations = [];

  const auxiliaryArray = [...arr];
  mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;

  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;

  while (i <= middleIdx && j <= endIdx) {
    const animation = {};
    animation.comparison = [i, j];
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      mainArray[k] = auxiliaryArray[i];
      i += 1;
      animation.swap = [k, i];
    } else {
      mainArray[k] = auxiliaryArray[j];
      animation.swap = [k, j];
      j += 1;
    }
    k += 1;
    animations.push(animation);
  }

  while (i <= middleIdx) {
    animations.push({
      comparison: [i, i],
      swap: [k, i],
    });
    mainArray[k] = auxiliaryArray[i];
    i += 1;
    k += 1;
  }

  while (j <= endIdx) {
    animations.push({
      comparison: [j, j],
      swap: [k, j],
    });
    mainArray[k] = auxiliaryArray[j];
    j += 1;
    k += 1;
  }
}
