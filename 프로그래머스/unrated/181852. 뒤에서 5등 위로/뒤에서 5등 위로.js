function solution(num_list) {
    const sortNum_list = num_list.sort((a, b) => a - b);
    return sortNum_list.slice(5);
}