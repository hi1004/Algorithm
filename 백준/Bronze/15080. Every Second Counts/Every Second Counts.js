const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');
const startTime = lines[0].split(':').map(Number);
const endTime = lines[1].split(':').map(Number);

const totalStart = startTime[0] * 3600 + startTime[1] * 60 + startTime[2];
const totalEnd = endTime[0] * 3600 + endTime[1] * 60 + endTime[2];

console.log(
  totalEnd - totalStart < 0
    ? totalEnd + 24 * 3600 - totalStart
    : totalEnd - totalStart
);
