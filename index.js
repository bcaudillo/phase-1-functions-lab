// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
        return someValue - 42
    }
    else {
        return 42-someValue
    }
}
 te
function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
}

function distanceTravelledInFeet(start,destination){
    if (start > destination){
        return (start - destination)*264
    }
    else {
        return (destination - start)*264
    }

}
function calculatesFarePrice(start, destination){
    const x = distanceTravelledInFeet(start,destination)
    if (x < 400){
       return 0
    }
    else if(x<=2000){
       return (x-400)*.02
     }
     else if (x<=2500){
       return 25
    }
    else{
       return 'cannot travel that far'
   }

}