

const towerOfHanoi = (coinCount, source,destination, auxiliary) => {

 if(coinCount===0){
     return 0;
 }

 let moveOne = towerOfHanoi(coinCount-1,source,auxiliary,destination);
 let moveTwo =1;
 let moveThree =towerOfHanoi(coinCount-1,auxiliary,destination,source)
 return moveOne+moveTwo+moveThree;

}

console.log(towerOfHanoi(2,0,0,0))