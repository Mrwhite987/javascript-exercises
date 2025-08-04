const sumAll = function (first, last) {
  if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";

  if (first <= 0 || last <= 0) {
    return "ERROR";
  }
  if (last < first) {
    let largerNum = first;
    first = last;
    last = largerNum;
  }
  let sum = 0;
  for (let i = first; i <= last; i++) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(2, 4));
// Do not edit below this line
module.exports = sumAll;
