function solution(n) {
    const strN = String(n);
    const arrN = Array.from(strN, el => Number(el));
    const result = arrN.sort((a, b) => b - a).join("")
    
    return Number(result);
}