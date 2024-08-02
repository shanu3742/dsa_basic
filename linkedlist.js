class Node {
    constructor(data) {
        this.value = data;
        this.next = null;
    }


}

class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }
        isEmpty(){
            return this.size === 0;
        }
        getSize(){
            return this.size;
        }
        prepend(data){
            if(this.isEmpty()){
                this.head= new Node(data);
                this.size= this.size+1;
            }else{
                //store the current head 
                let currentHead = this.head;
                //get the new node and attach it to the  head
                this.head = new Node(data);
                //attach the previous head to next of the new head
                this.head.next = currentHead;
                this.size = this.size+1;
            }
        }

        append(data){
            if(this.isEmpty()){
                this.head = new Node(data);
                this.size= this.size+1;
            }else{
                //reach last node
                let current = this.head;
                while(current.next !==null){
                    current = current.next
                }
                // append new node to the last node next value 
                current.next = new Node(data);
                this.size= this.size+1;

            }

        }


        insert(data,index){
            
            if(index < 0 || index > this.size ){
            console.warn('invalid index')
                return
            }
            //add first item to list
            if(this.isEmpty()){
                this.prepend(data)
            }else{
                let currentHead = this.head;
                for(let i = 1; i<index;i++){
                    currentHead = currentHead.next;
                }

                let node = new Node(data);
                //first assign all node after the current index to the new created node next because all of it will come after that node
                node.next= currentHead.next;
                //again assin node to the current node next because it's next node
                currentHead.next= node;
                this.size = this.size+1;



            }

        }

        print(){
        
        // recursive function till we will not reach 
        // the end of the link list and if we reach 
        // the end in that case next value will 
        // be null and it will be base condition to stop recursive call

             
        //print the value of node in reverse order
        // const  getValue = (linklist) => {
        //     if(linklist.next ===null){
        //         return  linklist.value
        //     }
        //     let nextNode = linklist.next;

        //     return  getValue(nextNode) + ' ' + linklist.value
        // }

        //     return getValue(this.head)



            const  getValue = (linklist,nodeToPrint) => {
                    if(linklist.next ===null){
                        return nodeToPrint + ' ' + linklist.value
                    }
                    let nextNode = linklist.next;

                    return getValue(nextNode, nodeToPrint+ ' ' + linklist.value)
                }

            return getValue(this.head,'')
            


        }
    
}


const list = new LinkedList();
list.prepend('shanu');
list.prepend('bhanu');
list.prepend('kumar');
console.log(list.head);
list.prepend(20);
list.append('sks')
list.insert('ADD BEFORE KUMAR',1)
list.insert('add before shanu',5)
console.log(list.print())
