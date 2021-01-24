/* Create a function with parameter data (a string of any length), which will go through the data and search for the number of vowels, (a,e,i,o,u) and return the total number of matches (in thise case vowels) found. */

var numberOfVowels = (data) => {
  const vowels = ["a","e","i","o","u"]
  
  let counter = 0; // initialize counter

  //loop through data to see if each character is a vowel
  for (let letter of data){
    if (vowels.includes(letter)){
      counter++
    }
  }
// Return number of vowels
return counter
};

// Log responses to console
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
console.log(numberOfVowels("I Love Coding"));