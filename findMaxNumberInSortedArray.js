

const maxOneInArray = (arr) => {
  let currentIndex=0;
  let arrayWithMaxOne=0;
  let innerPointer=arr[0].length-1;
  while(currentIndex<arr.length){ 

    while(arr[currentIndex][innerPointer] ===1 && innerPointer>0){
        innerPointer--;
        arrayWithMaxOne= currentIndex;
     
    }

   currentIndex++;

  }
  return arrayWithMaxOne;

}

console.log(maxOneInArray([[0,0,0,1],[1,1,1,1],[0,1,1,1],[0,0,1,0]]))