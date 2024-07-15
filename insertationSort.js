const insertationSort = (arr) => {
    for(let i=1;i<arr.length;i++){
        let itemToInsert =arr[i];
        //comapire the item with all previous item and also j value should be greater than 0
        let j=i-1;
        while(j>=0 && arr[j]>itemToInsert){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=itemToInsert;
    }
return arr
}

console.log(insertationSort([5,1,6,2,20]))