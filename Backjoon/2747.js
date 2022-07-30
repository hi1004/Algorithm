const [n] = require('fs')
  .readFileSync('./input.txt', 'utf-8')
  .split(' ')
  .map(Number);

function fib(num) {
  let temp = [0, 1];

  if (num === 0) return 0;
  for (let i = 0; i < num - 1; i++) {
    temp.push(temp[i] + temp[i + 1]);
  }

  return temp[temp.length - 1];
}

console.log(fib(90));
