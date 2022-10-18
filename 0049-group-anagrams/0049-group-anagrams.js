/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    
    for (const str of strs) {
        const key = str.split("").sort().join("");
        
        if (map[key] === undefined) map[key] = [];
        map[key].push(str);
    }
    
    return Object.values(map);
};