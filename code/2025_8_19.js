/**
 * 给你一个整数数组 nums ，返回全部为 0 的 子数组 数目。子数组 是一个数组中一段连续非空元素组成的序列。
 */

function zeroFilledSubarray(nums){
    const len = nums.length;
    let pre = 0, res = 0;
    for(let i = 0; i < len; i++){
        if(nums[i] === 0){
            pre ++;
            res += pre;
        }else{
            pre = 0;
        }
    }
    return res;
};

const nums = [1,3,0,0,2,0,0,4];

console.log(zeroFilledSubarray(nums));