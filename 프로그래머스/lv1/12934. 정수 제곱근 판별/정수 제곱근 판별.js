function solution(n) {
    var answer = 0;
    console.log()
    
    if(Number.isInteger(Math.sqrt(n))) {
        answer = (Math.sqrt(n)+1) ** 2
    } else {
        answer = -1
    }
    return answer;
}