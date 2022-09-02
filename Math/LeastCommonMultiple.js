// 최소공배수(LCM)

function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}

function leastCommonMultiple(a, b) {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

console.log(leastCommonMultiple(6, 15));
