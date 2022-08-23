const Main = input => {
  const n = Number(input);
  console.log(n >= 1000 ? 'Yes' : 'No');
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
