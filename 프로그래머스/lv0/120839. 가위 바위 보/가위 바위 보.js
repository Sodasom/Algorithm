function solution(rsp) {
    // 가위 = 2, 바위 = 0, 보 = 5
    const rspArr = [...rsp];
    const winArr = [];
    
    rspArr.forEach(el => {
        if(el === "2") {
            winArr.push("0")
        }
        if(el === "0") {
            winArr.push("5")
        }
        if(el === "5") {
            winArr.push("2")
        }
    })
    
    return winArr.join("")
}