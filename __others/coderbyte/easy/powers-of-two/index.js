function PowersofTwo(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  return PowersofTwo(num / 2);
}

module.exports = PowersofTwo;
