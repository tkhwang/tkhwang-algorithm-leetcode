/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return "";

    const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b);
    const gcd = getGCD(str1.length, str2.length);

    return str1.slice(0, gcd);
};