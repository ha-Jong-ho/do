function solution(s) {
    let number_list = s.split(' ');
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let v of number_list) {
        if (v * 1 > max)
            max = v;
        if (v * 1 < min)
            min = v;
    }
    
    if (number_list.length > 0)
        return min + " " + max;
    return "";
}