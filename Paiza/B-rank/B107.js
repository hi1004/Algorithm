const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M, K] = fs
  .readFileSync(file)
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let cards = Array.from(Array(N), (n, index) => 1 + index).map(Number);
let shuffleCards = [];
for (let i = 0; i < K; i++) {
  shuffleCards = [];
  for (let s = 0; s < N; s += M) {
    shuffleCards.push(cards.slice(s, s + M));
  }

  for (let j = 1; j <= shuffleCards.length / 2; j++) {
    const temp = shuffleCards[j - 1];

    shuffleCards[j - 1] = shuffleCards[shuffleCards.length - j];
    shuffleCards[shuffleCards.length - j] = temp;
  }

  cards = shuffleCards.flat();
}

cards.map(Number).forEach(ans => {
  console.log(ans);
});
