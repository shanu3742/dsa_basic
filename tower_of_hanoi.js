

const towerOfHanoi = (coinCount, source,destination, auxiliary) => {

 if(coinCount===0){
    console.log(`Move disk ${coinCount} from ${source} to ${destination}`);
     return 0;
 }

 let moveOne = towerOfHanoi(coinCount-1,source,auxiliary,destination);
 console.log(`Move disk ${coinCount} from ${source} to ${destination}`);
 let moveTwo =1;
 let moveThree =towerOfHanoi(coinCount-1,auxiliary,destination,source)
 return moveOne+moveTwo+moveThree;

}

console.log(towerOfHanoi(2,'a','b','c'))