class Keyboard extends Transmitter{
    constructor(){
        super();
        $(document).keydown(this.translate);
    }
    translate=(e)=>{
        console.log('Keyboard input detected translating key code now!');
        let key = this.getKey(e.which);
        if(key){
            console.log('Key code ' + e.which+' translates to '+key);
            this.broadcast(key);
        }else{
            console.log('Key code ' +e.which+' has no purpose');
        }
    };
    broadcast(message){
        this.message = message;
        this.transmit();
    }
    getKey(code){
        let key = false;
        if(code === INPUT_KEY.W || code === INPUT_KEY.UP_ARROW){
            key = DIRECTION.UP;
        }else if(code === INPUT_KEY.S || code === INPUT_KEY.DOWN_ARROW){
            key = DIRECTION.DOWN;
        }else if(code === INPUT_KEY.A || code === INPUT_KEY.LEFT_ARROW){
            key = DIRECTION.LEFT;
        }else if(code === INPUT_KEY.D || code === INPUT_KEY.RIGHT_ARROW){
            key = DIRECTION.RIGHT;
        }else if(code === INPUT_KEY.F||code === INPUT_KEY.ENTER){
            key = UI_ACTION.CONFIRM;
        }
        return key;
    }
}