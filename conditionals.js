//const rain = false;
//const temperature = 30;

//if (!rain) {
//  console.log("Leave your umbrella at home!");
//}

//if (temperature < -40 || temperature > 40) {
//  console.log("Maybe going outside isn't such a great idea...");
//} else if (temperature < 15) {
//  console.log("Shore sleeves won't cut it!");
//} else {
//  console.log("Short sleeves are fine.");
//}

//console.log("Now you're ready to go outside!");

//const isCitizen = true;
//const age = 26;

//if (isCitizen && age > 18) {
//  console.log("You are eligible to vote.");
//}
const age = 10;
const whichSchool  = function (age) {
  if (age < 13) {
    console.log("Elementary School");
  } else if (age >= 13 && age <= 18) {
    console.log("Secondary School");
  } else {
    console.log("Lighthouse Labs");
  }
};