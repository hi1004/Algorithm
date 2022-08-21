const Main = input => {
  let n = Number(input);

  console.log(n < 12 ? ++n : 1);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
