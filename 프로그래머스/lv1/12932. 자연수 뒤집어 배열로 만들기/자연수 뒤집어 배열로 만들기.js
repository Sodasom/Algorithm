function solution(n) {
    const strN = String(n);
    const arrN = [...strN].reverse().map(el => Number(el))
    return arrN;
}