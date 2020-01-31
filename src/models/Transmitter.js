class Transmitter{
    constructor(){
        this.listeners = [];
        this.message = null;
    }
    transmit(){
        for(let i = 0; i < this.listeners.length; i++){
            this.listeners[i].update(this.message);
        }
        console.log(this.constructor.name+' has just transmitted a message to all subscribers!');
    }
    subscribe(listener){
        this.listeners.push(listener);
        console.log(listener.constructor.name+' is now receiving transmissions from '+this.constructor.name);
    }
    unsubscribe(listener){
        for(let i = 0; i < this.listeners.length; i++){
            if(this.listeners[i] === listener){
                return this.listeners.splice(i,1);
            }
        }
        console.log(listener.constructor.name+' is no longer receiving transmissions from '+this.constructor.name);

    }
}