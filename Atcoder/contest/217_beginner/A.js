const Main = input => {
  const [s, t] = input;
  console.log(s < t ? 'Yes' : 'No');
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split(' '));
