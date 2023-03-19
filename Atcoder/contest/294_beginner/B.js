const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [h, w] = input.shift().split(' ').map(Number);
const arrs = input.slice().map(n => n.split(' ').map(Number));
const a = Array.from(Array(26), (_, i) => i + 1);
for (let i = 0; i < a.length; i++) {
  a[i] = String.fromCharCode(64 + a[i]);
}
arrs.forEach(arr => {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      answer.push('.');
    } else {
      answer.push(a[arr[i] - 1]);
    }
  }
  console.log(answer.join(''));
});
