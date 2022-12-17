const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const [A, B, C] = [300, 60, 10];

let result = '';

result += `${parseInt(T / A)} `;
T %= A;
result += `${parseInt(T / B)} `;
T %= B;
result += `${parseInt(T / C)} `;
T %= C;

result = T !== 0 ? -1 : result;

console.log(result);
