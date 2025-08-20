/**
 * 给你一个 m * n 的矩阵，矩阵中的元素不是 0 就是 1，
 * 请你统计并返回其中完全由 1 组成的 正方形 子矩阵的个数。
 */

function countSquares(matrix) {
    const m = matrix.length, n = matrix[0].length;
    let res = 0;
    // 记录列连续的1
    const clowns = new Array(n).fill(0);
    for(let i = 0; i < m; i++){
        // 记录当前行连续的1
        let rows = 0;
        for(let j = 0; j < n; j++){
            // 更新rows和clowns
            if(matrix[i][j] > 0){
                // 根据 rows、clowns和matrix[i - 1][j - 1] 的最小值寻找矩形
                let max = Math.min(rows, clowns[j]);
                if(i > 0 && j > 0){
                    max = Math.min(max, matrix[i - 1][j - 1]);
                }
                res += max + 1;
                matrix[i][j] = Math.max(matrix[i][j], max + 1);
                rows += 1;
                clowns[j] += 1; 
            }else{
                rows = 0;
                clowns[j] = 0;
            }
        }
    }
    return res;
};


const matrix =[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]

console.log(countSquares(matrix));


