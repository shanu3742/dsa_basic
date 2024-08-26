

const getPermutation = (list) => {
const result = []

const getPermutationList = (listData,current) => {
if(listData.length===0){
   result.push([...current])
    return 
}
for(let i=0; i<listData.length;i++){
    let pickedItem = listData[i];
    current.push(pickedItem)
    let restItem = listData.filter((el,index) => i !==index);
    // return [pickedItem,...getPermutation(restItem)]
    getPermutationList(restItem,current);
    current.pop()


}

}

getPermutationList(list,[],[]);
return result;

}

console.log(getPermutation([1,5,6]))