const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.pop();

for (let i = 0; i < input.length; i++) {
  const [name, age, weight] = input[i].split(' ');

  if (Number(age) > 17 || Number(weight) >= 80) {
    console.log(name + ' Senior');
  } else {
    console.log(name + ' Junior');
  }
}
