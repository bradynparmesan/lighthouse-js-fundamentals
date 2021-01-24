/* Function to replace whitespace in a given string, and return the string with %20 in place of whitespace */

const urlEncode = function (text) {
  let urlString = []

  for (let i = 0; i < text.length; i++) {
    urlString.push(text[i])

    //Checks for whitespace and replaces with "%20"
    if (urlString[i] === " ") {
      urlString.splice(i, 1, "%20")
    }
  }
  
  if ((urlString[urlString.length - 1]) === "%20") {
    urlString.pop()
  } if (urlString[0] === "%20") {
    urlString.shift()
  }
  //returns revised string without whitespace
  return urlString.join('')

};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
console.log(urlEncode(" This is great, I'm actually learning!   "));