function solution(box, n) {
    var answer = 0;
    const [x,y,z] = box;
    answer = Math.floor(x/n) * Math.floor(y/n) * Math.floor(z/n)
    return answer;
}