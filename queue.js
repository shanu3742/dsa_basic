class   Queue {

    queueList= [];
    queueFixedSize=0;
    size=0;

    constructor(queuelist,queueFixedSize){
        this.queueFixedSize=queueFixedSize;
        if(queuelist){
            if(Array.isArray(queuelist)){
                let i=0;
                let upperBoundies= i+1;
                let queueSize=0;
                //to get the size of the queue
                for(i= 0;i<upperBoundies;i++){
                   
                    if(queuelist[i]===undefined){
                        
                         break;
                    }else{
                      
                        queueSize = queueSize+1;
                        upperBoundies=upperBoundies+1;
                    
                    }

                }
                

                if(queueSize>this.queueFixedSize){
                    this.size=0;
                    this.queueList=[];
                    throw new Error("Queue size is greater than the fixed size")

                }else{
                    this.size = queueSize;
                    this.queueList= [...queuelist]
                }
               
               
            }else{
                if(this.queueFixedSize<1){
                    this.size=0;
                    this.queueList=[];
                    throw new Error("Queue size is greater than the fixed size")

                }else{
                    this.queueList = [queuelist];
                    this.size = 1
                }
                
            }
            
        }else{
            this.queueList = [];
            this.size = 0;
        }
    }

    equeue(item){
        // this.queueList.push(item);
        if(this.queueFixedSize<this.size){
            throw new Error("Queue size is greater than the fixed size")

        }else{
            this.size= this.size+1;
            this.queueList[this.size-1]=item;
        }

    }
    dequeue(){
        if(this.size<=0){
            return null
        }
        else{
            let [itemToRemove, ...rest] = this.queueList;
            this.queueList = rest;
            this.size = this.size-1;
            return itemToRemove
        }
    
}

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queueList[0]
    }
    isEmpty(){
        return this.size === 0;
   }

   print(){
    return this.queueList.toString();
   }

   getSize(){
    return this.size;
   }

}
const queue = new Queue([7,18,11,100],6);
console.log(queue.print())
queue.equeue(1000)
console.log(queue.print())
queue.equeue(1001)
console.log(queue.print())
queue.equeue(2001)
console.log(queue.print())
// queue.equeue(23001)
// console.log(queue.dequeue())
// console.log(queue.print())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.peek())
// console.log(queue.isEmpty())