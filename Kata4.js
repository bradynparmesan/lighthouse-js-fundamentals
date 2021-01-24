/* Function to examine the length of a course instructor's name and return the longest name in the batch */


const instructorWithLongestName = (instructors) => {
  
  let maxIndex = 0; //store index
  let tempName = 0; //initialize and store the length of the name
  
  for (let i = 0; i < instructors.length; i++) {
    if (tempName < instructors[i].name.length) {
      tempName = instructors[i].name.length; 
      /*if the name length is longer than the current length, assign current length to temp and compare until the longest is found */

      //assign index with the position of the longest name
      maxIndex = i; 
    }
  }
  //return the object with index
  return (instructors[maxIndex]); 
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
