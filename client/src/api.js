import { EventEmitter } from "events";
import io from "socket.io-client";



class Api extends EventEmitter {
    constructor() {
        super();
        this.setMaxListeners(100)
        this.socket = io('/messages');
        this.socket.on('messages', (data) => {
            this.emit('messages', data);
        })

    };

    set (settings) {
        debugger
        this.socket.emit('set', settings);
    }

    start () {
        this.socket.emit('start')
    }
}

export default new Api();