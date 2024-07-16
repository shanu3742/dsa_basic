const mergeSort = (arr) => {
    if(arr.length===1){
        return arr
    }
    const mid= Math.floor(arr.length/2);
    const left= arr.slice(0,mid);
    const right= arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))

}

const merge= (leftList,rightList) =>{
    let result=[];
    while(leftList.length && rightList.length){
        if(leftList[0]<rightList[0]){
            result.push(leftList.shift())
        }else{
            result.push(rightList.shift())
        }
    }
    return [...result,...leftList,...rightList]
}

console.log(mergeSort([5,1,6,2,20]));


//time complexity O(nlogn)