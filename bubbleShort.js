
const sort = (arr) => {
    let sortedArray=[...arr]
    let isSwap=false;

    do{
        isSwap=false;

        for(let i=0;i<sortedArray.length;i++){
            if(sortedArray[i]>sortedArray[i+1]){
                let temp=sortedArray[i];
                sortedArray[i]=sortedArray[i+1];
                sortedArray[i+1]=temp;
                isSwap=true;
            
            }
        }
    }while(isSwap)

        return sortedArray
 
}
console.log(sort([5,3,8,4,6]))