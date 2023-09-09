const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [[n], ...a] = require('fs')
  .readFileSync(file, 'utf8')
  .trim()
  .split('\n')
  .map(r =>
    r
      .trim()
      .split(/\s+/)
      .map(i => (isNaN(i) ? i : +i))
  );
function calculateTax(income) {
  const taxRanges = [
    { minIncome: 0, maxIncome: 100000, taxRate: 0.0 },
    { minIncome: 100001, maxIncome: 750000, taxRate: 0.1 },
    { minIncome: 750001, maxIncome: 1500000, taxRate: 0.2 },
    { minIncome: 1500001, maxIncome: Infinity, taxRate: 0.4 },
  ];

  let totalTax = 0;

  for (const { minIncome, maxIncome, taxRate } of taxRanges) {
    if (income > minIncome) {
      const taxableAmount = Math.min(maxIncome, income) - minIncome + 1;
      const taxOnIncome = taxableAmount * taxRate;
      totalTax += taxOnIncome;
    }
  }

  return Math.floor(totalTax);
}

const incomes = a.flat();

let totalTax = 0;
for (const income of incomes) {
  totalTax += calculateTax(income);
}

console.log(totalTax);
