class Dispatcher extends Transceiver {
    constructor(){
        super();
    }
    update(message){
        let display =  $('#display');
        display.css('width',800);
        display.css('width',300);
        display.empty();
        display.append(`<p>${this.constructor.name} received message!</p>`);
        display.append(`<p><span style="color:red;">Message Contents:</span> ${message.read()}</p>`);
        display.append(`<p><span style="color:red;">Message Type:</span> ${message.constructor.name}</p>`)
    }

}