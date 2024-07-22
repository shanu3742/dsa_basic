class StackList {
    list =[];
    front=0;
    rare=0;

    constructor(){
      this.list.length=0;
      this.front=0;
      this.rare=0;
    }

    push(element){
        this.list[this.rare]= element;
        this.rare= this.rare+1;
    }
    pop(){
        if(this.isEmpty()) {
            this.rare=0;
            return "Stack is empty"
        };
        let itemToRemove= this.list[this.rare-1];
        this.rare= this.rare-1;
        this.list.length= this.rare;
        
        return itemToRemove;
    
     }

     isEmpty(){
        return this.rare===this.front;
     }

     size(){
        return this.rare;
     }
     peek(){
        return this.list[this.rare-1];
     }
     printStack(){
    let str = "";
    for (let i = 0; i < this.list.length; i++)
        str += this.list[i] + " ";
    return str;
}
}


const stackData = new StackList();
stackData.push(10);
console.log('push all1',stackData.size())
stackData.push(20)
console.log('push all2',stackData.size())
stackData.push(30)
console.log('push all3',stackData.size())
// console.log(stackData.list)
console.log(stackData.printStack())
console.log('all',stackData.size())
// console.log(stackData.peek())
console.log(stackData.pop())
console.log('all1',stackData.size())
console.log(stackData.pop())
console.log('all2',stackData.size())
console.log(stackData.pop())
console.log('all3',stackData.size())
console.log(stackData.pop())
console.log('all4',stackData.size())
console.log(stackData.size())

console.log(stackData.printStack())