const Main = input => {
  const n = Number(input);
  console.log(n / 2);
};

Main(require('fs').readFileSync('./input.txt, utf-8'));
