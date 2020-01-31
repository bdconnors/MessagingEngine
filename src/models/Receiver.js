class Receiver{

    constructor(){}

    update(message){
        throw new Error('you must override update from parent class Receiver');
    }
}