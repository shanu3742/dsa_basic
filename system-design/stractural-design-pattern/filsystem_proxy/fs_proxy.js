class Fs_Proxy{
    fs=null;
    constructor(fs_node){
        this.fs=fs_node;
    }

    readFile(path,format,callback){
        if(!path.match(/\.md$|\.MD$/)){
          return callback(new Error('Can only read markdown file'))
        }

        this.fs.readFile(path,format,(error,content) =>{
            if(error){
                return callback(error)
            }
            return callback(null,content)
        })

    }
}


module.exports=Fs_Proxy;