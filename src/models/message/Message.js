class Message{
    constructor(content){
        this.content = content;
    }
    type(){
        return this.constructor.name;
    }
    read(){
        return this.content;
    }
}