
const selectionSort= (arr) => {
    if(arr.length<2){
        return arr
    }
    // last item is always pivot element
    let pivot =arr[arr.length-1]
    let leftArray=[];
    let rightArray=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            leftArray.push(arr[i])
        }else{
            rightArray.push(arr[i])
        }
        
    }

    return [...selectionSort(leftArray),pivot,...selectionSort(rightArray)]

}

console.log(selectionSort([5,1,6,2,20]))
//time complixity worst case O(n^2)
//time complexity best case o(nlogn)