const Main = input => {
  const lines = [];
  for (let i = 4; i > 0; i--) {
    lines.push(input[i - 1].trim().split(' ').reverse().join(' '));
  }

  for (let i = 0; i < 4; i++) {
    console.log(lines[i]);
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').split('\n'));
