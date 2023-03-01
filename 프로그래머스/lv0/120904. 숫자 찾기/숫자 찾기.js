function solution(num, k) {
    const indexNum = num.toString().indexOf(k);
    const findNum = indexNum === -1 ? -1 : indexNum + 1;
    return findNum;
}