const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arraySortInfo = (inputArray) => {
  if (inputArray.find((el) => typeof el !== "number")) {
    return "Some of the argument is not number";
  }
  /*if (inputArray.find((el) => typeof el !== "number")) {
    return "Some of the argument is not number";    
    *here we can use some method as well, and even preferebly due to it can be situation when 
    we have 'false' string i.e. empty string in array, and it will return true fo rour conditions in case of using find, but with somem method we solve this bug
    */
  }
  if (inputArray.every((el, i) => (i > 0 ? el >= inputArray[i - 1] : true))) {
    return "Array is sorted by ascend";
  }
  if (inputArray.every((el, i) => (i > 0 ? el <= inputArray[i - 1] : true))) {
    return "Array is sorted by descent";
  }

  return "Array is not sorted";
};

console.log(arraySortInfo(a)); // Some of the argument is not number
console.log(arraySortInfo(b)); // Array is sorted by ascending
console.log(arraySortInfo(c)); // Array is sorted by descending
console.log(arraySortInfo(d)); // Array is not sorted
