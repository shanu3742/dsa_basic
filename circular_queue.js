class CircularQueue {
    constructor(capicity){
        this.capicity=capicity;
        this.items= new Array(this.capicity)
        this.front=-1;
        this.rear=-1;
        this.currentLength=0;
    }

    isFull(){
        return this.currentLength===this.capicity;
    
    }
    isEmpty(){
        return this.currentLength===0;
    
    }
    enqueue(element){
        if(this.isFull()){
            console.log("queue is full")
        }else{
            this.rear = (this.rear+1)%this.capicity;
            this.items[this.rear]=element;
            this.currentLength= this.currentLength+1;
            if(this.front===-1){
                this.front= this.rear;
            }
        }
    }
    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front]=null;
        this.front = (this.front+1)%this.capicity;
        this.currentLength= this.currentLength-1;
        if(this.isEmpty()){
            this.front= -1;
            this.rear= -1;
            
        }
        return item
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return null;
        }
        return this.items[this.front];
    }
    print(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return null;
        }
        let str=''
        let i
        for( i=this.front; i !=this.rear; i=(i+1)%this.capicity){
         str= str+this.items[i]+' ';
        }
        str= str+this.items[i];
        console.log(str)
    }


}
const queue = new CircularQueue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.print();