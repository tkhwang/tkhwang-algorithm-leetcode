/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const N = nums.length;
    
    const dp = Array(N).fill(0);
    dp[0] = nums[0];
    
    for (let i = 1; i < N; i += 1) {
        dp[i] = Math.max(dp[i-1] + nums[i], nums[i]);
    }
    
    return Math.max(...dp)
};