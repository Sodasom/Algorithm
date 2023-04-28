function solution(order) {
    var answer = 0;
    let stringOrder = String(order);
    for(let i = 0; i < stringOrder.length; i++) {
        if(stringOrder[i] === '3' || stringOrder[i] === '6' || stringOrder[i] === '9') {
            answer++;
        } 
    }
    return answer;
}