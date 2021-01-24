/* Function to find the two largest numbers in the given array, and sum them together */

const sumLargestNumbers = function(data) {
  //initialize variables
  let largeNum = 0;
  let secLargeNum = data[0];
  let sum = 0;

  for( let i = data.length - 1; i > 0; i--) {
    if (data[i] > largeNum) {
      largeNum = data[i];

    } else if(data[i] > secLargeNum) {
      secLargeNum = data[i];  
    }
  }
  /* Evalutes condition parameter to determine even or odd, then returns sum of even or odd numbers for the given array */

  sum = largeNum + secLargeNum;
  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([34, 3, 10, 25]));