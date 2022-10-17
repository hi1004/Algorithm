function quickSort(arr, left = 0, right = arr.length - 1) {
  function pivot(arr, start, end) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    const pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
  }

  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 3, 65, 2, 10, 89, 5]));
