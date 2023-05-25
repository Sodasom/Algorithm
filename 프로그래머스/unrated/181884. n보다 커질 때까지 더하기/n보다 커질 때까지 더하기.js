function solution(numbers, n) {
    let result = 0;
    for(let i = 0; i < numbers.length; ++i) {
        if(result > n) break;
        result += numbers[i];
    }
    return result;
}