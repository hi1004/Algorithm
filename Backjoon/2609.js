const Main = input => {
  const [a, b] = input;

  function euclidean(num1, num2) {
    return num2 === 0 ? num1 : euclidean(num2, num1 % num2);
  }

  function leastCommonMultiple(a, b) {
    return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclidean(a, b);
  }

  console.log(euclidean(a, b));
  console.log(leastCommonMultiple(a, b));
};

Main(
  require('fs')
    .readFileSync('./input.txt', 'utf-8')
    .trim()
    .split(' ')
    .map(Number)
);
