const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const lines = fs.readFileSync(file).toString().trim().split('\n');

const arrs = lines.slice(0).map(line => line.trim().split(''));

const rectangle = nums => {
  console.log(nums);

  // return (
  //   Math.abs(x1 - x2) === Math.abs(y1 - y2) &&
  //   Math.abs(x3 - x4) === Math.abs(y3 - y4)
  // );
};

const point = [];
for (let i = 0; i < arrs.length; i++) {
  for (let j = 0; j < arrs.length; j++) {
    if (arrs[i][j].includes('#')) {
      const x = i + 1;
      const y = j + 1;

      point.push([x, y]);
    }
  }
}

console.log(point);
