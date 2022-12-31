function solution(s) {
    var answer = '';
    const str = [...s].sort()

    const collection = {}
    for(let val of str) {
        collection[val] = (collection[val] || 0) + 1;
    }
    for(let key in collection) {
        if(collection[key] === 1) {
            answer += key
        }
    }
    return answer;
}