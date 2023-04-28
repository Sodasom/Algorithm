function solution(my_string) {
    let array = [...my_string];
    let filter = array.filter((el, index) => array.indexOf(el) === index);
    let answer = filter.join('')
    return answer;
}