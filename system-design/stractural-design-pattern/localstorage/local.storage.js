const { error } = require('console');
const {writeFile,existsSync,readFileSync,unlink} = require('fs');


class LocalStorage {
  items = {}
    constructor(){
        if(existsSync('localStorage.json')){
            console.log('loading local Storage item from json');
            let text = readFileSync('localStorage.json');
            this.items = JSON.parse(text);

        }else{
           this.items ={}
        }
    }

    get length(){
        return Object.keys(this.items).length
    }

    getItem(key){
        return this.items[key]??null;
    }

    setItem(key,value){
        this.items[key]=value;
        writeFile('localStorage.json',JSON.stringify(this.items),(err) => {
            if(err){
                console.log(err)
            }
        })
    }
    clear(){
        this.items={};
        unlink('localStorage.json',() => {
            console.log('localstorage file removed')
        })
    }

}

module.exports = new LocalStorage();