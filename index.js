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

const distanceTravelledInFeet = function(startPoint, destination) {
  if (startPoint < destination) {
    return (destination - startPoint) * 264
  } else {
    return (startPoint - destination) * 264
  }
}

function calculatesFarePrice(startPoint, endPoint) {
  //returns the fare for the customer
}