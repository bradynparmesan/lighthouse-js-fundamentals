/* Function to check values in an array, and summate those that meet the condition (ex. odd or even) */

const conditionalSum = function(values, condition) {
// set sums for even and odd to 0
  let even = 0;
  let odd = 0;

  /* works through array of values and checks whether the value is even or odd, and increments sum by the */

    for( let i = 0; i < values.length; i++) {
      if ((values[i] % 2 === 0) && (condition === "even")) {
        even += values[i];
      } else if((values[i] % 2 !== 0) && (condition === "odd")) {
        odd += values[i];  
      }
    }
    /* Evalutes condition parameter to determine even or odd, then returns sum of even or odd numbers for the given array */

    if ( condition === "even") {    
      return even;

    } else if ( condition === "odd") {
      return odd;
    }

};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], 'odd'));