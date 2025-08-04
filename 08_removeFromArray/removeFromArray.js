const removeFromArray = function (arr, ...args) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (!args.includes(item)) {
      returnArr.push(item);
    }
  }
  return returnArr;
};

// Do not edit below this line
module.exports = removeFromArray;
