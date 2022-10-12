const arr = [9, 8, 7, 6, 5, 4, 10, 2, 1, 0, 3];

// solution1
function selectionSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      isSwap = true;
    }
  }
  return arr;
}

console.log(selectionSort1(arr));

// solution2
function selectionSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }

    if (i !== lowest) {
      swap(arr, i, lowest);
    }
  }
  return arr;
}

console.log(selectionSort2(arr));
