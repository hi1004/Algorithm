function main(input) {
  let tmp = input[0].split(' ');
  const N = parseInt(tmp[0], 10);
  const M = parseInt(tmp[1], 10);

  const score = [];
  for (var i = 0; i <= M; i++) {
    score.push(0);
  }

  let scoreSum = 0;
  for (i = 0; i < N; i++) {
    let [l, r, s] = input[i + 1].split(' ').map(Number);
    l--;
    r--;
    score[l] += s;
    score[r + 1] -= s;
    scoreSum += s;
  }

  for (i = 0; i < M; i++) {
    score[i + 1] = score[i + 1] + score[i];
  }

  let scoreMin = score[0];
  for (i = 0; i < M; i++) {
    scoreMin = scoreMin > score[i] ? score[i] : scoreMin;
  }
  console.log(scoreSum - scoreMin);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n'));
