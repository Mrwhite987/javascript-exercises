const palindromes = function (str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "");
  const strArr = cleanedStr.split("");
  const lowerStrArr = strArr.map((letter) => letter.toLowerCase());
  const cleanedLowerStr = lowerStrArr.reduce((str, letter) => str + letter, "");
  let reversedStr = "";
  for (let i = 0; i < lowerStrArr.length; i++) {
    const letter = lowerStrArr[lowerStrArr.length - i - 1];
    reversedStr += letter;
  }
  return cleanedLowerStr == reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
