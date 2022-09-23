/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    
    const dp = Array(n+1).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    
    for (let i = 2; i <= n; i += 1) {
        dp[i] = Math.min(dp[i-2] + cost[i-2], dp[i-1] + cost[i-1])
    }
    return dp[n];
};