function addMeMaybe(number, theFunction) {
  number += 1; // Increment the number by 1
  theFunction(number); // Call the provided function with the incremented number
}

module.exports = {
  addMeMaybe: addMeMaybe,
};
