const Main = input => {
  [a, b] = input.split(' ').map(Number);

  console.log(Math.floor(b / a));
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
