function solution(num_list) {
    const multiply = num_list.reduce((acc, cur) => acc * cur); 
    const plus = num_list.reduce((acc, cur) => acc + cur);
    return multiply < plus * plus ? 1 : 0;
}