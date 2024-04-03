function solution(a, b, c, d) {
    let dice_nums = [0, 0, 0, 0, 0, 0, 0];
    let same = [[], [], [], [], []];
    let point = 0;
    
    // 눈금 갯수 카운팅
    dice_nums[a] += 1;
    dice_nums[b] += 1;
    dice_nums[c] += 1;
    dice_nums[d] += 1;
    
    // 같은 눈금 갯수
    for (let v in dice_nums) {
        let d = dice_nums[v];
        same[d].push(v * 1);
    }
    
    // 조건들
    if (same[4].length > 0) {
        return 1111 * same[4][0];
    }
    
    if (same[3].length > 0) {
        return (10 * same[3][0] + same[1][0]) ** 2;
    }
    
    if (same[2].length > 1) {
        return (same[2][0] + same[2][1]) * (Math.abs(same[2][0] - same[2][1]));
    }
    
    if (same[2].length > 0) {
        return same[1][0] * same[1][1];
    }
    
    return Math.min(Math.min(a, b), Math.min(c, d));
}