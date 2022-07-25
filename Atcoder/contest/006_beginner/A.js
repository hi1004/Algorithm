const Main = input => {
  input = input.split('').map(Number);

  if (Number(input.join('')) % 3 === 0 || input.includes(3)) {
    console.log('YES');
  } else {
    console.log('NO');
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
