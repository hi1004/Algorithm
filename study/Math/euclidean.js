// 유클리드 알고리즘 최대공약수(GCD) 계산

function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return b === 0 ? a : euclideanAlgorithm(b, a % b);
}
