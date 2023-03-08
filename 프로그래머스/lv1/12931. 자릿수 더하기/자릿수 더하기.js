function solution(n)
{
    const strN = String(n);
    const arrN = Array.from(strN, el => Number(el));
    const plusN = arrN.reduce((acc, cur) => acc + cur);

    return plusN
}