/* Function to replace whitespace in a given string, and return the string with %20 in place of whitespace */

const urlEncode = function (text) {
  let url = []

  for (let i = 0; i < text.length; i++) {
    url.push(text[i])

    //Checks for whitespace and replaces with %20 characters
    if (url[i] === " ") {
      url.splice(i, 1, "%20")
    }
  }
  if ((url[url.length - 1]) === "%20") {
    url.pop()
  } if (url[0] === "%20") {
    url.shift()
  }
  return url.join('')
};