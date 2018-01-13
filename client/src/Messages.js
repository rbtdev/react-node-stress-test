import React, { Component } from 'react';
import Api from './api.js';
import './Messages.css';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }

    setModel(messages) {
        this.model.messages = messages;
    }

    getAll() {
        let _this = this;
        return Api.getNewMessages()
            .then(messages => {
                // Format message data into message elements
                let newMessageElements = messages.map((message, i) => {
                    return (
                        <div key={message.id} class='message'>
                            <div>{message.text}</div>
                        </div>
                    )
                })
                // Update model with message elements
                _this.setState({ messages: newMessageElements})
            })
    }

    start() {
        this.getAll()
            .then(() => {
                setInterval(() => {
                    this.getAll()
                }, 500);
            })
    }

    componentWillMount() {
        this.start();
    }

    render() {
        return (
            <div class = 'messages'>
                {this.state.messages}
            </div>
        )
    }
}

export default Messages;