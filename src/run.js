const keyboard = new Keyboard();
const input = new Input();
const dispatcher = new Dispatcher();
keyboard.subscribe(input);
input.subscribe(dispatcher);

