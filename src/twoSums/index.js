/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */
const twoSums = (arr, base) => {
  /* your logic here...*/

  let start = 0;
  let total = 0;
  let returnArr = [];
  for(let i = 1; i < arr.length; i++) {
    total = arr[start] + arr[i];
    if(total === base) {
      returnArr.push([arr[start], arr[i]]);
      return returnArr;
    }
    start++;
    total = 0;
  }
};

export default twoSums;
