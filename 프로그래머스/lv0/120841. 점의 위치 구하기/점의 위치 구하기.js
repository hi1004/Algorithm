function solution(dot) {
    var answer = 0;
    let x = dot[0];
    let y = dot[1];
    if(x>0 && y>0) {
        answer = 1;
    } else if(x<0 && y<0) {
        answer = 3;
    } else if(x>0 && y<0) {
        answer = 4
    } else {
        answer = 2
    }
    return answer;
}