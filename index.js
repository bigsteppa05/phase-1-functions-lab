function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
        
    } else {
        return 42 - blockNumber;
        
    }
    
}
function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
    
}
function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264;
        
    } else {
        return (start - destination) * 264;
        
    }
    
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
        
    } else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        return .02 * (distanceTravelledInFeet(start, destination);
        
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
        
    }
    
}