function solution(array) {
    var answer = [...array.join('')].filter(s=>s==='7').length
    return answer;
}