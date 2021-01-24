/* Function to check air samples and return "clean" or "dirty" based on given threshold */

const checkAir = (samples, threshold) => {
  let dirty = 0;
  //Iterates through the array (samples)
  for (i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirty++;
    }
  /* expresses air sample as a proportional perfentage to compare against threshold */
  } if (threshold < dirty/samples.length) {
    return "Polluted";
  } else if (threshold > dirty/samples.length) {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))