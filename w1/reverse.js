for (let j = 2; j < process.argv.length; j++) {
  let stringNow = "";
  stringNow += process.argv[j];
    let reverseString = "";
    for (let i = stringNow.length - 1; i >= 0; i--) {
      reverseString += stringNow.charAt(i);
    }
    console.log(reverseString);
};
