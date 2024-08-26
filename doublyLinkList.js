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


