/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const freq = {};
    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }
    
    const keys = Object.keys(freq);
    
    return keys.filter((key) => freq[key] === 1)[0];
};