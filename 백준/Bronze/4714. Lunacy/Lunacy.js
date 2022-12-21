const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.pop();

for (let i = 0; i < input.length; i++) {
  const num = input[i].toFixed(2);
  const earth = 0.167;
  const answer = (num * earth).toFixed(2);
  console.log(
    `Objects weighing ${num} on Earth will weigh ${answer} on the moon.`
  );
}
