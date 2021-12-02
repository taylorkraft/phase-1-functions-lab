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

const calculatesFarePrice = function(startPoint, destination) {
  const distance = distanceTravelledInFeet(startPoint, destination)
    
  if (distance < 400) {
    return 0
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400)
  } else if (distance > 2000 && distance <= 2500) {
    return 25
  } else {
    return 'cannot travel that far'
  }
}