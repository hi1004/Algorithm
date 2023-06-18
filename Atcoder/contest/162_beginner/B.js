const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
let answer = [];
for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) answer.push('FizzBuzz');
  else if (i % 5 === 0) answer.push('Buzz');
  else if (i % 3 === 0) answer.push('Fizz');
  else answer.push(i);
}
console.log(answer.filter(n => Number(n)).reduce((a, b) => a + b));
