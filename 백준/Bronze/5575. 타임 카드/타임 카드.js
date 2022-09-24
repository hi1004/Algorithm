const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const line = fs.readFileSync(file).toString().trim().split('\n');

for (let i = 0; i < line.length; i++) {
  const [st, sm, ss, et, em, es] = line[i].split(' ').map(Number);
  const endTime = et * 60 * 60 + em * 60 + es;
  const startTime = st * 60 * 60 + sm * 60 + ss;
  const workTime = endTime - startTime;

  const hours = Math.floor(workTime / 3600);
  const minutes = Math.floor((workTime - hours * 3600) / 60);
  const seconds = workTime - hours * 3600 - minutes * 60;
  console.log(hours, minutes, seconds);
}
