const localStorage = require('./local.storage');
console.log('length of localstorage',localStorage.length);
let name = localStorage.getItem('name');
let age= localStorage.getItem('age')
//if name or age is not avaliable set the name and age
if(!name){

    localStorage.setItem('name','shanu');
}
if(!age){
    localStorage.setItem('age',25); 
}
name= localStorage.getItem('name');
age=localStorage.getItem('age');
console.log('name:',name);
console.log('age:',age);
localStorage.clear()