function solution(n) {
    var answer =  Number(n.toString().split('').map(Number).sort((a,b)=>b-a).join(''));
   
   
    return answer;
}