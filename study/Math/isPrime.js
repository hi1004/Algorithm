const isPrime1 = n => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPrime2 = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isPrime3 = n => {
  if (n < 2) return false;
  const prime = {};
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    for (let j = i ** 2; j <= n; j += i) {
      prime[j] = true;
    }
  }
  return !prime[n];
};

console.log(isPrime1(1));
console.log(isPrime2(5));
console.log(isPrime3(7));
