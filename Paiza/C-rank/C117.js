const Main = line => {
  const [n, m] = line[0].split(' ').map(Number);
  const [A, B, C] = line[1].split(' ').map(Number);
  const noodles = line.slice(2).map(Number);

  let result = 0;
  for (let val of noodles) {
    C * val + -B * m - A < 0 ? result++ : 0;
  }
  console.log(result);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
