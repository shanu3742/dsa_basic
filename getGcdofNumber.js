const getGcdOfNumber = (num1,num2) => {
    if(num1<num2){
        let temp = num1;
        num1=num2;
        num2=temp;
    }
    if(num1%num2===0){
        return num2;
    }

    return getGcdOfNumber(num2,num1%num2);
    

}


console.log(getGcdOfNumber(12,18))