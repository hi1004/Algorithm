function solution(before, after) {
    var answer = 0;
    if([...after].sort().join('') === [...before].sort().join('')) {
        answer = 1;
    } 
    return answer;
}