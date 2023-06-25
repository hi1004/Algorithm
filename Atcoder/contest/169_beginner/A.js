const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], [...a]] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : BigInt(i)))
  );
const result = a.reduce((num1, num2) => BigInt(num1) * BigInt(num2), 1);
console.log(result > Math.pow(10, 18) ? -1 : result.toString());
