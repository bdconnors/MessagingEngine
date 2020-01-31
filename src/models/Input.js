class Input extends Transceiver{
    constructor(){
        super();
    }
    update(message){
        let msg = this.interpret(message);
        if(msg){this.broadcast(msg);}
    }
    broadcast(message){
        this.message = message;
        this.transmit();
    }
    interpret(message){
        let msg = false;
        let movement = this.isMovement(message);
        let interfaceAction = this.isInterfaceAction(message);
        if(movement){
            msg = new Movement(message);
        }else if(interfaceAction){
            msg = new InterfaceAction(message);
        }
        return msg;
    }
    isMovement(message){
        const up = (message === DIRECTION.UP);
        const down = (message === DIRECTION.DOWN);
        const left = (message === DIRECTION.LEFT);
        const right = (message === DIRECTION.RIGHT);
        return up || down || left || right;
    }
    isInterfaceAction(message){
        return message === UI_ACTION.CONFIRM;
    }

}