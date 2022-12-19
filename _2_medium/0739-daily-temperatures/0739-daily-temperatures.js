/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const N = temperatures.length;
    const stack = [];
    const res = Array(N).fill(0);
    
    for (const [ i, temperature ] of temperatures.entries()) {
        while (stack.length && temperatures[stack.at(-1)] < temperature) {
            const pop = stack.pop();
            res[pop] = i - pop;
        }
        stack.push(i)
    }
    
    return res;
};