const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let n = parseInt(input[0]);

let g = [];
for (let i = 0; i < n; i++) {
  let [a, b] = input[i + 1].split(' ').map(val => parseInt(val));
  if (g[a] == undefined) g[a] = [];
  if (g[b] == undefined) g[b] = [];
  g[a].push(b);
  g[b].push(a);
}

let visited = new Set();
let ans = 1;
visited.add(1);
if (g[1] == undefined) return console.log(1);
let stack = [1];
while (stack.length) {
  let now = stack.pop();
  ans = Math.max(ans, now);
  for (let i = 0; i < g[now].length; i++) {
    if (visited.has(g[now][i])) continue;
    stack.push(g[now][i]);
    visited.add(g[now][i]);
  }
}
console.log(ans);
