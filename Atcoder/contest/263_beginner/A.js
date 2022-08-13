const Main = input => {
  const cards = input[0].split(' ').map(Number);
  cards.sort((a, b) => a - b);

  const collection = {};

  for (let i of cards) {
    collection[i] = (collection[i] || 0) + 1;
  }

  if (
    Object.values(collection).includes(2) &&
    Object.values(collection).includes(3)
  ) {
    console.log('Yes');
  } else {
    console.log('No');
  }
};

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim().split('\n'));
