const Main = line => {
  const numberGrops = line
    .slice(1)
    .map(item => item.split(' ').slice(1).map(Number));

  function euclidean(a, b) {
    return b === 0 ? a : euclidean(b, a % b);
  }

  numberGrops.forEach(numbers => {
    let arr = [];
    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        arr.push(euclidean(numbers[i], numbers[j]));
      }
    }
    console.log(arr.reduce((a, b) => a + b));
  });
};
Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
