const Main = input => {
  n = Number(input);
  let p = [0, 0, 1];
  for (let j = 0; j < n - 1; j++) {
    p = [p[1], p[2], (p[0] + p[1] + p[2]) % 10007];
  }
  console.log(p[0]);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
