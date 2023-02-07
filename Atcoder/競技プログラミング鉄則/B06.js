const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [N] = input.shift().split(' ').map(Number);
const nums = input.shift().split(' ').map(Number);
const [Q] = input.shift().split(' ').map(Number);
const list = input.slice().map(n => n.split(' ').map(Number));
const atari = [0];
const hazure = [0];

for (let i = 1; i <= N; i++) {
  atari[i] = atari[i - 1];
  if (nums[i - 1] === 1) atari[i]++;
  hazure[i] = hazure[i - 1];
  if (nums[i - 1] === 0) hazure[i]++;
}

for (let i = 0; i < Q; i++) {
  const [L, R] = list[i];
  const numAtari = atari[R] - atari[L - 1];
  const numHazure = hazure[R] - hazure[L - 1];
  if (numAtari > numHazure) console.log('win');
  else if (numAtari < numHazure) console.log('lose');
  else console.log('draw');
}
