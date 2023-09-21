const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [...input] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  )
  .flat();

const arr = input.slice(1);

let p = [0.25, 0.1, 0.05, 0.01].map(v => v * 100);
for (let i = 0; i < arr.length; i++) {
  const ans = [];
  for (let j = 0; j < p.length; j++) {
    let v = Math.floor(arr[i] / p[j]);
    ans.push(v);
    arr[i] = arr[i] - v * p[j];
  }
  console.log(ans.join(' '));
}
