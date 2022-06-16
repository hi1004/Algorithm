const input = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .trim()
  .split('\n');

const N = parseInt(input[0]);
const n_arr = [];
for (let i = 1; i <= N; i++) {
  n_arr.push(parseInt(input[i]));
}

const M = parseInt(input[n_arr.length + 1]);
const m_arr = [];
for (let i = 0; i < M; i++) {
  m_arr.push(input[n_arr.length + 2 + i].split(' ').map(Number));
}

const n_obj = n_arr.reduce((target, key, index) => {
  target[index + 1] = key;
  return target;
}, {});

m_arr.forEach(arr => {
  if (arr[2] > n_obj[arr[0]]) {
    arr[2] = n_obj[arr[0]];
  }
  n_obj[arr[1]] = n_obj[arr[1]] + arr[2];
  n_obj[arr[0]] = n_obj[arr[0]] - arr[2];
});

Object.values(n_obj).forEach(r => {
  console.log(r);
});
