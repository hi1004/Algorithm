const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const n = Number(input.shift());
const arrs = input.slice().map(arr => arr.split(' ').map(s => s.trim()));

let var1 = 0;
let var2 = 0;
for (let i = 0; i < n; i++) {
  const state = arrs[i].shift();
  let [a, b] = arrs[i].map(Number);
  if (b === undefined) {
    var2 = 0;
  }
  if (state === 'SET') {
    if (a === 1) {
      var1 = b;
    } else {
      var2 = b;
    }
  } else if (state === 'ADD') {
    var2 = var1 + a;
  } else {
    var2 = var1 - a;
  }
}
console.log(var1, var2);
