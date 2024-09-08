class Node {
    prev;
    value;
    next;

    constructor(data){
        this.prev=null;
        this.value=data;
        this.next = null;
    }
}


class CircularDoublyLinkList{
    head;
    tail;
    size;

    constructor(){
        this.head=null;
        this.tail=null;
        this.size = 0;
    }
    getSize(){
      return this.size;  
    }
    isEmpty(){
        return this.size ===0;
    }

    prepend(value){
        let node = new Node(value)
        //add first item
        if(this.isEmpty()){
          this.head=node;
          this.tail=node;
          node.next =  this.head;
          node.prev = this.head;      
        }else{
        node.next= this.head;
        node.prev= this.tail;
        this.head.prev =node;
        this.tail.next =node;
        this.head = node;
        }  
       this.size= this.size+1;
    }

    append(value){
      if(this.isEmpty()){
        this.prepend(value);
      }else{
      //add from last
      let node = new Node(value)
      node.prev= this.tail;
      node.next = this.head;
      this.tail.next = node;
      this.head.prev = node;
      //updated the current tail
      this.tail = node; 
      this.size= this.size+1;
      }
    }

    removeFromFront(){
       if(this.isEmpty()){
        return null;
       } else if (this.size === 1) {
        let value = this.head.value;
        this.head = null;
        this.tail = null;
        this.size = 0;
        return value;
    }
       else{
        let valueToRemove = this.head.value
        this.head = this.head.next;
        this.head.prev = this.tail;
        this.tail.next= this.head;
        this.size= this.size-1;
        return valueToRemove
       }
    }
    removeFromEnd(){
        if(this.isEmpty()){
         return null;
        } else if (this.size === 1) {
         let value = this.head.value;
         this.head = null;
         this.tail = null;
         this.size = 0;
         return value;
     }
        else{
         let valueToRemove = this.tail.value
         this.tail = this.tail.prev;
         this.tail.next = this.head;
         this.head.prev= this.tail;
         this.size= this.size-1;
         return valueToRemove
        }
     }
    print(){
        let data= '';
        let index=0;
        let currentHead= this.head;
        while(index<this.size){
            data = data+currentHead.value+`${index===this.size-1? '':','}`;
            index=index+1;
            currentHead=currentHead.next;

        }
        return data;


    }

    

}
let circularLinkList = new CircularDoublyLinkList();
circularLinkList.prepend(5);
circularLinkList.prepend(6);
circularLinkList.append(10)
circularLinkList.removeFromFront()
circularLinkList.removeFromEnd()
console.log(circularLinkList.print());
