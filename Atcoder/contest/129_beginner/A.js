const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [input] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : i - 0))
  );

let ans = [];
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    ans.push(input[i] + input[j]);
  }
}
console.log(Math.min(...ans));
