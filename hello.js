//console.log function
const sayHelloToConsole = function(name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("Bradyn");
sayHelloToConsole("Randal");

//return function
const returnSayHello = function (name) {
  return "Hello, " + name;
}

const greeting = returnSayHello('Bradyn');