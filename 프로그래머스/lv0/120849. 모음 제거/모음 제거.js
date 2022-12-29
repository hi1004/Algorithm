function solution(my_string) {
    
    var answer =   my_string.split(' ').map(str => str.replace(/[a, e, i, o, u]/g,'')).join(' ')
  
    return answer;
}