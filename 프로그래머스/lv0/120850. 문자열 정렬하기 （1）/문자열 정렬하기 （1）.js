function solution(my_string) {
    // replace 사용해서 숫자만 뽑아낸 다음에
    // Number 타입으로 변환하여 배열에 push
    // sort로 오름차순 정렬
    let replaceStr = my_string.replace(/[a-z]/g, '');
    let numberArr = Array.from(replaceStr).map(Number);
    let numberSort = numberArr.sort((a, b) => a - b);
    
    return numberSort;
}