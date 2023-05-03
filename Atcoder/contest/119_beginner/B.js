const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...inputs] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );
const ans = inputs.map(input =>
  input[1] === 'BTC' ? input[0] * 380000 : input[0]
);
console.log(ans.reduce((a, b) => a + b));
