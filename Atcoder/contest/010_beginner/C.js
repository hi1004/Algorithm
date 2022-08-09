function Main(input) {
  const [x1, y1, x2, y2, T, V] = input[0].split(' ').map(Number);

  const start = [x1, y1];
  const end = [x2, y2];
  const dist = T * V;
  const points = input.slice(2).map(x => x.split(' ').map(Number));

  let flag = false;

  const sub = (p1, p2) => {
    return p1.map((x, i) => x - p2[i]);
  };

  const length = p => {
    return Math.sqrt(p.map(x => x * x).reduce((acc, x) => acc + x, 0));
  };

  for (let i = 0; i < points.length; i++) {
    const toLen = length(sub(start, points[i]));
    const fromLen = length(sub(points[i], end));
    if (toLen + fromLen <= dist) {
      flag = true;
      break;
    }
  }
  console.log(flag ? 'YES' : 'NO');
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
