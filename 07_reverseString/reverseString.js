const reverseString = function (str) {
  let arr = str.split("");
  arr = arr.reverse();
  let newStr = arr.join("");
  return newStr;
};

// Do not edit below this line
module.exports = reverseString;
