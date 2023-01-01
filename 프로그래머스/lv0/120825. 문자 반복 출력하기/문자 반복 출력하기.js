function solution(my_string, n) {
    let answer = my_string.split('').map(s=>s.repeat(n)).join('')
    
    return answer;
}