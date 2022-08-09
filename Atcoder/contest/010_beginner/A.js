function Main(input) {
  console.log(input + 'pp');
}

Main(require('fs').readFileSync('./input.txt', 'utf-8').trim());
