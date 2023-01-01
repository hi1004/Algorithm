function solution(array, height) {
    var answer = array.filter(num => num>height).length
    return answer;
}