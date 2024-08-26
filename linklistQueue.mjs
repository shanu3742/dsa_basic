//linklist queue
//first in first out 

import { LinkedList } from "./linkedlist.mjs";

class LinklistQueue {
    queueList;
    constructor(){
        this.queueList = new LinkedList();
    }
    
    getSize(){
        return this.queueList.getSize();
    }


    isEmpty(){
        return this.queueList.isEmpty()
    }

    equeue(value){
        this.queueList.append(value)

    }
    dequeue(){
      return  this.queueList.removeFromFront()
    }
    peek(){
        return  this.queueList.head.value;
    }
    print(){
        return this.queueList.print()
    }

}

let linkListData = new LinklistQueue();
console.log('queue empty',linkListData.isEmpty());
linkListData.equeue(3);
linkListData.equeue(4);
linkListData.equeue(17);
console.log(linkListData.print())
console.log('delted item',linkListData.dequeue())
console.log(linkListData.print())
console.log(linkListData.getSize())
console.log('peak',linkListData.peek())











