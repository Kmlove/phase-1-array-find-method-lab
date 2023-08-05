// code your solution here
function superbowlWin(arrayOfObjects){
    //1. Get the result value out of each object
    let winningObj = arrayOfObjects.find((obj) => obj.result === "W")
    
    if(winningObj){
        return winningObj.year
    } else{
        return undefined
    }
   
}