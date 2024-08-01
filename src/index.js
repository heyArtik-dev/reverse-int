module.exports = function reverse (n) {
  n = Math.abs(n).toString().split('').reverse().join('');
  return n.at(0) == '0' ? +n.slice(1) : +n;
}
