function solution(my_string) {
    let answer = 0;
    const regex = /[0-9]/g


   answer =  my_string.split(/[^0-9]/g).map(Number).reduce((a,b)=>a+b,0)
 

    return answer;
}