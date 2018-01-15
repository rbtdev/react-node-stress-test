

function socketApp(io) {
    var messageIo = io.of('/messages')
    messageIo.on('connection', startMessages);
}

function startMessages(socket) {
    let interval = 1000;
    let messageCount = 10;
    let timer = null;

    function sendMessages() {
        let messages = [];
        for (let counter = 0; counter < messageCount; counter++) {
            messages.push({
                id: counter,
                text: 'message ' + counter
            })
        }
        var index = Math.floor(Math.random() * messageCount)
        messages[index].text = 'updated';
        console.log(new Date().getTime() + ": Sending messages...");
        socket.emit('messages', messages);
    }

    function start() {
        console.log("Starting timer");
        sendMessages();
        timer = setInterval(sendMessages, interval);
    }

    function stop () {
        if (timer) {
            console.log('Clearing timer');
            clearInterval(timer);
            timer = null;
        }
    }
    socket.on('start', () => {
        stop();
        start();
    })
    socket.on('disconnect', () => {
        stop();
    });
    socket.on('stop', () => {
        stop();
    })
    socket.on('set', (data) => {
        messageCount = data.count || messageCount;
        interval = data.interval || interval;
        console.log("Setings changed: " + messageCount + ", " + interval);
        if (timer) {
            stop();
            start();
        }
    })
}

module.exports = socketApp;