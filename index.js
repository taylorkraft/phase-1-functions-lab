const distanceFromHqInBlocks = function(block) {
  if (block > 42) {
    return (block - 42)
  } else {
    return (42 - block)
  }
}

function distanceFromHqInFeet(whateverValue) {
  distanceFromHqInBlocks(whateverValue)
  // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

  // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTraveledInFeet(startPoint, endPoint) {
  //returns the value of feet traveled
}

function calculatesFarePrice(startPoint, endPoint) {
  //returns the fare for the customer
}