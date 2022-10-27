const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N] = fs.readFileSync(file).toString().trim().split(' ').map(Number);

// function primeNumbers(n) {
//   if (n < 2) return null;
//   const nums = [];

//   for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         isPrime = false;
//       }
//     }
//     if (isPrime) nums.push(i);
//   }

//   return nums.join(' ');
// }

// const primeNumbers = [2];
// for (let i = 3; i <= N; i += 2) {
//   if (primeNumbers.every(p => i % p)) {
//     primeNumbers.push(i);
//   }
// }

function primeNumbers(n) {
  const primes = [2];
  for (let i = 3; i <= N; i += 2) {
    if (primes.every(p => i % p)) primes.push(i);
  }
  return primes.join(' ');
}
console.log(primeNumbers(N));

function primeNumbersRange(start, end) {
  if (start < 2) return null;
  const nums = [];

  for (let i = start; i <= end; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    if (isPrime) nums.push(i);
  }

  return nums.join(' ');
}
console.log(primeNumbersRange(3, N));
