class Transceiver extends Transmitter{
    constructor(){
        super();
    }
    interpret(){
        throw new Error('you must override interpret from parent class Transceiver');
    }
    broadcast(message){
        throw new Error('you must override broadcast from parent class Transceiver');
    }
    update(message){
        throw new Error('you must override update from parent class Transceiver');
    }
}