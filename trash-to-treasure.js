const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  // trash type is string type object being deposited

  for (let i of keys) {
    if (i === trash) {
      bins[i]++; // increment appropiate bin value based on trash type
    }
  }
  return (bins); // return new values for sorting bins
};