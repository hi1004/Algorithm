const Main = line => {
  let [n, x] = line[0].split(' ').map(Number);
  const products = line[1].split(' ').map(Number);
  x = x.toString(2);
  const reverse = x.split('').reverse().join('').split('').map(Number);

  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    if (reverse[i]) {
      sum += products[i];
    }
  }
  console.log(sum);
};

Main(require('fs').readFileSync('./input.txt', 'utf8').split('\n'));
