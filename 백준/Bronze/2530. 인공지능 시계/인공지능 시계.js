const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

const [T, M, S] = line[0].split(' ').map(Number);
const D = Number(line[1]);

const totalS = T * 60 * 60 + M * 60 + S + D;

function time(totalTime) {
  const t = Math.floor(totalTime / 3600) % 24;
  const m = Math.floor((totalTime - T * 60 * 60) / 60) % 60;
  const s = (totalTime - T * 60 * 60 - M * 60) % 60;
  return [t, m, s].join(' ');
}

console.log(time(totalS));
