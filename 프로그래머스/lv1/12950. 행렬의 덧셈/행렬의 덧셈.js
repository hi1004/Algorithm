function solution(arr1, arr2) {
    var answer = [];
    const result = []
    const div = arr1[0].length;
    
    arr1 = arr1.flat();
    arr2 = arr2.flat();
    answer = arr1.map((n,i) => {
        return n+arr2[i]
    })
    for(let i = 0; i<arr1.length; i+=div) {
        result.push(answer.slice(i,i+div))
    }
    return result;
}