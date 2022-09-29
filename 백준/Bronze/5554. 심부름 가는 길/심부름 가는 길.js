const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const time = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const totalTime = time.reduce((acc, cur) => acc + cur);

const m = Math.floor(totalTime / 60);
const s = totalTime % 60;
console.log(`${m}\n${s}`);
