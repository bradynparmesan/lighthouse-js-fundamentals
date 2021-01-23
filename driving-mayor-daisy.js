const carPassing = function (cars, speed) {
  let car = {
    time: Date.now(), // triggers time-stamp
    speed: speed
  };
  cars.push(car); // pushes new object with time and speed properties to cars array
  return cars;
};