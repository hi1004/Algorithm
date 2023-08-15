function Main(input) {
  const N = BigInt(input);
  let k = 0;

  while (2 ** k <= N) {
    k++;
  }
  console.log(k - 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
