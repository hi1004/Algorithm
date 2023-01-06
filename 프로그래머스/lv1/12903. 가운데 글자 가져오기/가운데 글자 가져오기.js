function solution(s) {
    var answer = s.length%2 !== 0 ? s[Math.floor(s.length/2)] : s[Math.floor(s.length/2)-1] + s[Math.floor(s.length/2)]
    return answer;
}