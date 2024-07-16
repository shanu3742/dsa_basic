

const climbStairs = (n) => {
const startNoOfway = [1,2];
const recursive = (startIndex,noOfWAY)=> {
  if(startIndex === n) return noOfWAY;
    return [...recursive(startIndex+1,[...noOfWAY,noOfWAY[startIndex-1]+noOfWAY[startIndex-2]])]
}
return recursive(2,startNoOfway)[n-1]
}

console.log(climbStairs(5))



const anotherWay = (n) => {
    if(n===1){
        return 1;
    }

    if(n===2){
        return 2;
    }

    return anotherWay(n-1) + anotherWay(n-2)
}

console.log(anotherWay(7))


//mremoized version
 
let memo = {
    1:1,
    2:2
};
const anotherWayMemoized = (n) => {
    const result =memo[n];
    if(result) return result;
    let left = anotherWayMemoized(n-1);
    let right = anotherWayMemoized(n-2);
    memo[n-1] = left;
    memo[n-2] = right;
    
    return left + right;
}

console.log(anotherWayMemoized(5))



//loop method 

const getClimpCount = (n) => {
    let  noOfWAY= [1,2];
    for(let i=2;i<n;i++){
        noOfWAY[i] = noOfWAY[i-1] + noOfWAY[i-2]
    }
    return noOfWAY[n-1]

}
console.log('get climp data',getClimpCount(5))

