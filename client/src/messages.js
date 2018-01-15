import React, { Component } from 'react';
import Api from './api.js';
import './messages.css';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.model = {
            updates: 0,
            messages: []
        };
        Api.on('messages', this.update.bind(this));
    }
    start (count, interval) {
        debugger
        Api.set({
            count: count,
            interval: interval
        })
        Api.start();
    }
    update(messages) {
        this.model.updates++;
        function messageElement(message, i) {
            return (
                <div key={message.id} className='message'>
                    <div>{message.text}</div>
                </div>
            )
        }

        this.model.messages = messages.map(messageElement);
        // Update model with message elements
        this.setState(this.model)
    }

    componentWillMount() {
    }

    render() {
        var loaded = (this.model.messages.length > 0) ? 'loaded' : '';
        var messagesTemplate =
            <div className={'messages ' + loaded}>
                <div>{this.model.updates}</div>
                <div>
                    {this.model.messages}
                </div>
            </div>

        return messagesTemplate
    }
}

export default Messages;