class OptimizedQueue {
    queue={};
    front=0;
    rare=0;
    constructor(item){ 
        if(item){
            this.queue[this.rare]= item;
            this.rare= this.rare+1;
        }

    }

    enqueue(item){
        if(item){
            this.queue[this.rare]= item;
            this.rare= this.rare+1;
        }
    }

    dequeue(){
        if(this.front === this.rare){
            return null;
        }else{
            let item= this.queue[this.front];
            delete this.queue[this.front];
            this.front= this.front+1;
            return item;
        }
        
    }

    peek(){
        if(this.front === this.rare){
            return null;
        }else{
            return this.queue[this.front];
        
        }
    }
    size(){
        return this.rare-this.front;
    
    }
    print(){
        console.log(this.queue);
    
    }
}

let queue= new OptimizedQueue(1);
queue.print()
queue.enqueue(12);
queue.enqueue(13);
queue.print()
queue.dequeue()
queue.print()
console.log(queue.peek())
console.log(queue.size())