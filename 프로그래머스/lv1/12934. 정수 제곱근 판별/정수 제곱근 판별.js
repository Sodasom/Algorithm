function solution(n) {
    // n의 제곱근 찾기
    const result = Math.sqrt(n);
    // 정수인지 판별 후, 정수일 경우 값에서 +1 하고 거듭제곱 아닐 경우 -1
    return Number.isInteger(result) ? (result + 1) ** 2 : -1;
}