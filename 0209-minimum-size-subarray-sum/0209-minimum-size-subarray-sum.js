/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const N = nums.length;

    let min = Infinity;
    const queue = new Queue();
    let sum = 0;

    for (let right = 0; right < N; right += 1) {
        const cur = nums[right];
        queue.enqueue(cur);
        sum += cur;
        
        while (sum >= target) {
            if (min > queue.size()) min = queue.size();
            const old = queue.dequeue();
            sum -= old;
        }
    }
    return min === Infinity ? 0 : min;
};