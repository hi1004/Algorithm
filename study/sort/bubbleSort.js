const arr = [9, 8, 7, 6, 5, 4, 10, 2, 1, 0, 3];

// solution1
function bubbleSort1(arr) {
  for (let i = arr.length; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(bubbleSort1(arr));

// solution2
function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) break;
  }
  return arr;
}

console.log(bubbleSort2(arr));
