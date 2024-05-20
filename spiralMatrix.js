let  a = [[4,5,6,1],[1,3,4,2],[10,2,12,11],[8,3,1,6]];

let colStart=0;
let rowStart=0;
let rowEnd= a.length-1;
let colEnd=a[0].length-1;


while(colEnd>=colStart &&  rowEnd >= rowStart){
  //print all row 

  
  for(let i =colStart; i<=colEnd;i++){
    console.log(a[rowStart][i])
}
  //update the row 
  rowStart= rowStart+1;
  
  for(let j= rowStart; j<=rowEnd;j++){
    console.log(a[j][colEnd])
}
  //update the col position
  
  colEnd= colEnd-1;
  
  if(rowEnd>=rowStart){
    for(let i= colEnd;i>=colStart;i--){
      console.log(a[rowEnd][i])
    }
    rowEnd= rowEnd-1;
}
  
  if(colEnd>= colStart){
    for(let i=rowEnd;i>=rowStart;i--){
      console.log(a[i][colStart])
    }
    colStart= colStart+1
}
  
}