function Main(input) {
  const regex = /[^aiueo]/gi;
  const result = input.match(regex).join('');
  console.log(result);
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
