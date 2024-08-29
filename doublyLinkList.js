class Node {
    prev;
    value;
    next;
    constructor(value){
    this.prev=null;
    this.value=value;
    this.next=null;

    }
}
class DoublyLinkList {
    head;
    tail;
    size;

    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
    getSize(){
        return this.size;
    }
    isEmpty(){
        return this.size ===0
    }

    prepend(value){
        //append the first node 
        let node= new Node(value)
        if(this.getSize() ===0){
         this.head= node;
         this.tail=node;
          
        }else{
          node.next=this.head;
          this.head.prev=node;
          this.head = node;
        }

        this.size= this.size+1

    }

    append(value){
        let node = new Node(value)
        if(this.getSize() ===0){
            this.head= node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;

        }
        this.size= this.size+1;
    }

    insert(data,index){
        if(index<0 || index>this.size){
            throw new Error('Invalid Index');
        }

        let node = new Node(data)

      if(index===0){
        //append at head
        if(this.getSize()===0){
            this.prepend(data);
            //no need to run further to increase the size we allready increase the size in prepend method 
            return
        }else{
            node.prev= this.head;
            node.next= this.head.next;
            this.head.next = node;  
        }

        
      }else if(index === this.getSize()){
        //append at end
        this.append(data);
        return
      }else{
        let insertIndex=0;
        let currentHead = this.head;
       
        while(insertIndex<index-1){
          currentHead = currentHead.next;
          insertIndex=insertIndex+1
        }
        // currentHead.next=node;
        node.prev=currentHead;
        node.next = currentHead.next;
        currentHead.next=node;
        currentHead.next.next=node.next;
        // this.head=node;

      }

      this.size= this.size+1;
    }
    
    removeFromFront(){
        if(this.isEmpty()){
            return null 
        }
        let value = this.head.value;
        this.head = this.head.next;
        if(this.head){
            this.head.prev= null;
        }
        this.size= this.size-1;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        let value = this.tail.value;
        if(this.getSize() ===1){
            this.head=null;
            this.tail=null;
        }else{
            this.tail = this.tail.prev;
            if(this.tail){
                this.tail.next = null;
            }
        }  
        this.size= this.size-1;

        return value;
    }

    print(){
        if(this.isEmpty()){
            return 'Empty Linked List'
        }
        let current = this.head;
        let result = '';
        while(current){
            result = result + current.value + ',';
            current = current.next;
        }
        return result
    }
    printReverse(){
        if(this.isEmpty()){
            return 'Empty Linked List'
        }
        let current = this.tail;
        let result = '';
        while(current){
            result = `${result}${current.value}${current.prev?'<---':''}`;
            current =  current.prev;
        } 
        return  result
    }
}
const doublyLinkList = new DoublyLinkList();
doublyLinkList.prepend(3);
doublyLinkList.prepend(4);
console.log(doublyLinkList.print())
doublyLinkList.append(1)
console.log(doublyLinkList.print())
doublyLinkList.prepend(6);
console.log(doublyLinkList.print())
console.log(doublyLinkList.printReverse())
console.log(doublyLinkList.removeFromFront())
console.log(doublyLinkList.print())
console.log(doublyLinkList.removeFromEnd())
console.log(doublyLinkList.print())

doublyLinkList.insert(101,1)

console.log(doublyLinkList.print())
console.log(doublyLinkList.getSize())
doublyLinkList.insert(303,0);
console.log(doublyLinkList.print())
console.log(doublyLinkList.getSize());
doublyLinkList.insert(1001,5);

// console.log()
//add at specific index
//remove at specific index
//search

