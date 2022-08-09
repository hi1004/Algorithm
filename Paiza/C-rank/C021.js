const Main = input => {
  const [xc, yc, r_1, r_2] = input[0].split(' ').map(Number);
  const n = Number(input[1]);

  const points = input.slice(2).map(x => x.split(' ').map(Number));
  let flag = false;
  const place = (x, y) => {
    if (
      r_1 ** 2 <= Math.pow(x - xc, 2) + Math.pow(y - yc, 2) &&
      r_2 ** 2 >= Math.pow(x - xc, 2) + Math.pow(y - yc, 2)
    ) {
      flag = true;
    } else {
      flag = false;
    }
  };

  for (let i = 0; i < n; i++) {
    place(...points[i]);
    console.log(flag ? 'yes' : 'no');
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
