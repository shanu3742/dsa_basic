let a=[4,5,18,24,56,70];


const findOne = (source,target) =>{
  let startPointer=0;
  let endPointer=source.length;
  while(startPointer<=endPointer){
     let midPoint = Math.floor((startPointer+endPointer)/2);
  
  if(source[midPoint]===target){
    return midPoint
  }
  if(source[midPoint]>target){
    endPointer=midPoint-1
}
  
    if(source[midPoint]<target){
    startPointer=midPoint+1
}
}
  
  return -1
  
}
console.log(findOne(a,70))


// time complexity O(log n)


const findOneRecursive = (source,target) =>{

    const recoursive =(startPointer,endPointer)=>{
        let midPoint = Math.floor((startPointer+endPointer)/2);
        if(startPointer>endPointer){
            return -1
        }
        if(source[midPoint]===target){
            return midPoint
        }
        if(source[midPoint]>target){
            return recoursive(startPointer,midPoint-1)
        }
        if(source[midPoint]<target){
            return recoursive(midPoint+1,endPointer)
        }
    }

    return recoursive(0,source.length-1)
}
let list = [1,2,3,4,5,6,7,8,9,10];
console.log(findOneRecursive(list,10))