function solution(start, end) {
    const result = [];
    for(let i = start; i >= end; i--) {
        result.push(i);
    }
    return result;
}