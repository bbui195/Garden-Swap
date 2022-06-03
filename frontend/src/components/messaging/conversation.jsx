import React from 'react';
import socketIOClient from "socket.io-client";


class Conversation extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const socket = socketIOClient("http://localhost:5001", {
            withCredentials: true,
            extraHeaders: {
                token: this.props.token
            }
        });
    }

    render() {
        return (
           <div>
                Conversation here         
           </div>
        )
    }
};

export default Conversation;