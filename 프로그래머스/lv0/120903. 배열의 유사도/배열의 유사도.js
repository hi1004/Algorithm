function solution(s1, s2) {
    var answer = s1.filter(n=>s2.includes(n)).length
    return answer;
}