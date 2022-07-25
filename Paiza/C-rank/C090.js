const Main = input => {
  input = input.trim().split('');
  const numbers = input.filter(e => e !== '-').map(Number);
  const distance = [12, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = distance[numbers[i]];
  }

  const result = numbers.reduce((acc, cur) => acc + cur);
  console.log(result * 2);
};

Main(require('fs').readFileSync('./input.txt', 'utf-8'));
