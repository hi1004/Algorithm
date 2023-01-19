const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');
const [H, W] = input.shift().split(' ').map(Number);
const images = input.slice().map(n => n.split(' ').map(Number));

images.forEach(image => {
  const answer = image.map(n => {
    if (n >= 128) return 1;
    else return 0;
  });
  console.log(answer.join(' '));
});
