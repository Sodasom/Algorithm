function solution(cipher, code) {
    const cipherArr = cipher.split("")
    const filterArr = cipherArr.filter((el, idx, arr) => (idx + 1) % code === 0)
     return filterArr.join("")
}