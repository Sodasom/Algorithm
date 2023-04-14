function solution(box, n) {
    // 가로, 세로, 높이 / 길이 -> 나눈 값 가 * 세 * 높
    const mapBox = box.map(el => Math.floor(el / n));
    const reduceBox = mapBox.reduce((acc, cur) => acc * cur);
    return reduceBox;
}