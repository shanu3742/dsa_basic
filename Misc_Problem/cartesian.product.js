const cartesianProduct = (listA,listB) => {
    if(listA.length===0){
        return []
    }
    let [productNumber ,...rest]=listA;
    let result=[]
    for(let i=0;i<listB.length;i++){
        result.push([productNumber,listB[i]])
    }
    return [...result,...cartesianProduct(rest,listB)]
}
console.log(cartesianProduct([1,4],[2,5]))