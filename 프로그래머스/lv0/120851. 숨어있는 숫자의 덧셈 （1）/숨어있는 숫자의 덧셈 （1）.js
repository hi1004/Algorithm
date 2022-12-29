function solution(my_string) {
    const regex = /[0-9]/g
    
    var answer = my_string.match(regex).map(s=>Number(s)).reduce((a,b)=>a+b,0)
    return answer;
}