function solution(array, n) {
    var answer = array.filter(num => num === n).length
    return answer;
}