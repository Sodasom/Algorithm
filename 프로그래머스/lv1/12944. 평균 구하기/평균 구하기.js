function solution(arr) {
    const average = arr.reduce((acc, cur) => acc + cur) / arr.length
    return average;
}