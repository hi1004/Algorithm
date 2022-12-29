function solution(age) {
    var answer = '';
    const alpa = []
    for(let i = 97; i<123; i++) {
       
        alpa.push(String.fromCharCode(i))
    }
    age.toString().split('').map(Number).forEach(n => {
        answer += alpa[n]
    })
    return answer;
}