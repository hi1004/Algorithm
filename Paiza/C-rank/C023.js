const Main = input => {
  const target = input[0].split(' ').map(Number);
  const n = Number(input[1]);
  const points = input.slice(2).map(point => point.split(' ').map(Number));

  let count;
  for (let i = 0; i < n; i++) {
    count = 0;
    for (let j = 0; j < 6; j++) {
      if (target.includes(points[i][j])) {
        count++;
      }
    }
    console.log(count);
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
