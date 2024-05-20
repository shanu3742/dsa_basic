
Array.prototype.map= function (){
    let output =[];
    for(let i=0; i<this.length; i++){
      output.push(`${i}-${this[i]}`)
    }
    return output;
}

let list = ['shanu','krk','shubham','sachin'];
console.log(list.map());