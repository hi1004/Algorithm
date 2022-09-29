const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, K] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const persons = new Array(N).fill().map((arr, i) => i + 1);

let result = [];
let i = K - 1;
while (persons.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    const num = persons.shift();
    persons.push(num);
  }

  const num = persons.shift();
  result.push(num);
}

console.log(`<${result.join(', ')}>`);
