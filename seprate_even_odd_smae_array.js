

function separateEvenOdd(arr) { 
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            let oddIndex= i;
            let oddValue= arr[i];
            for(let j=oddIndex+1;j<arr.length;j++){
            arr[j-1]=arr[j];
            }
            arr[arr.length-1]=oddValue;

        }
    
    }

    return arr;
}

console.log(separateEvenOdd([ 2, 3, 4, 5, 6, 7, 8, 9]));



//two pointer approach

const  separateEvenOddNumber = (arr) =>  {

    let left = 0;
    let right = arr.length - 1;
    while(left < right){

        while(arr[left] % 2 === 0 && left < right){
            left++;
        }

        while(arr[right] % 2 !== 0 && left < right){
            right--;
        }
        
        if(left < right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    
    return arr;
}

console.log(separateEvenOddNumber([ 2, 3, 4, 5, 6, 7, 8, 9]));