function solution(my_string) {
  
    const regex = /[^0-9]/g
    const answer = my_string.replace(regex,"").split('').map(Number).sort((a,b)=>a-b);
    return answer;
}