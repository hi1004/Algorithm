function solution(str1, str2) {

    const regex = new RegExp(str2,'g');
    return regex.test(str1) ? 1 : 2
    
  
}