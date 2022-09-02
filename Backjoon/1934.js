const Main = line => {
  const numberGrops = line.slice(1).map(item => item.split(' ').map(Number));

  function euclidean(a, b) {
    return b === 0 ? a : euclidean(b, a % b);
  }

  function leastCommonMultiple(a, b) {
    return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclidean(a, b);
  }
  numberGrops.forEach(numbers => {
    console.log(leastCommonMultiple(...numbers));
  });
};
Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
