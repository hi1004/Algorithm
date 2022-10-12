const arr = [9, 8, 7, 6, 5, 4, 10, 2, 1, 0, 3];

arr.sort((a, b) => a - b);

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) return mid;
    if (arr[mid] < val) start = mid + 1;
    else end = mid - 1;
  }
  return -1;
}

console.log(binarySearch(arr, 10));
