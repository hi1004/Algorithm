function solution(sides) {
    var answer = sides.reduce((a,b)=>a+b,0) - Math.max(...sides) > Math.max(...sides) ? 1 : 2
    return answer;
}