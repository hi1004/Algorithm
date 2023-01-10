function solution(n, arr1, arr2) {
    var answer = [];

    for(let i =0; i<n; i++) {
      let bit = [...(arr1[i] | arr2[i]).toString(2)];
     
        if(bit.length < n) {
            bit.unshift('0'.repeat(n-bit.length))
        }
 
        answer.push(bit.join('').replaceAll('1','#').replaceAll('0',' '))
    }
    
    return answer;
}