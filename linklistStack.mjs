import {LinkedList} from "./linkedlist.mjs"

class LinklistStack {
    stackData
    constructor(){
        this.stackData = new LinkedList()
    }
    //get size of the stack 
    getSize(){
        return this.stackData.size
    }

    isEmpty(){
        return this.stackData.getSize()
    }
    //stack used LIFO(Last in first out)
    push(value){
       this.stackData.prepend(value)
    }
    //remove from the  stack
    pop(){
      let result =  this.stackData.removeFromFront();
      return result
    }
    peek(){
        return this.stackData.head.value;
    }
    isEmpty(){
      return  this.stackData.isEmpty()
    }

    print(){
        return this.stackData.print()
    }
       



            


}


const stackList = new LinklistStack();
console.log('empty stack',stackList.isEmpty())
stackList.push(15);
stackList.push(34);
stackList.push(66);
console.log('stack size',stackList.getSize())
console.log('stack value before remove',stackList.print())
console.log('removed item from stack',stackList.pop())
console.log('stack size',stackList.getSize())
console.log('stack value after remove',stackList.print())
console.log('get first item from stack', stackList.peek())
console.log('stack is empty',stackList.isEmpty())