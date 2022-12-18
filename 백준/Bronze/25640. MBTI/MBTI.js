const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const MBTI = input.shift().trim();
const N = input.shift();
const arrs = input.map(i => i.trim());

const answer = arrs.filter(m => m === MBTI).length;
console.log(answer);
