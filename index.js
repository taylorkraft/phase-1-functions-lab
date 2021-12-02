const distanceFromHqInBlocks = function(block) {
  if (block > 42) {
    return (block - 42)
  } else {
    return (42 - block)
  }
}

const distanceFromHqInFeet = function(block) {
  return distanceFromHqInBlocks(block) * 264
}

function distanceTraveledInFeet(startPoint, endPoint) {
  //returns the value of feet traveled
}

function calculatesFarePrice(startPoint, endPoint) {
  //returns the fare for the customer
}