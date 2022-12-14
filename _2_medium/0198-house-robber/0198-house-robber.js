/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const N = nums.length;

    const dp = Array(N).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for (let i = 2; i < N; i += 1) {
        dp[i] = Math.max(dp[i-2] + nums[i], dp[i-1])
    }
    
    return dp[N-1];
};