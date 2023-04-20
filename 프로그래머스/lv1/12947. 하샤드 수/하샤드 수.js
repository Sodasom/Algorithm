function solution(x) {
    const arrX = Array.from(String(x), el => Number(el));
    let sum = 0;
    for(let i = 0; i < arrX.length; ++i) {
        sum += arrX[i]
    }
    return x % sum === 0 ? true : false;
}