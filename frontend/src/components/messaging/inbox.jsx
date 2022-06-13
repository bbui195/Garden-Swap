import React from 'react'
import { Link } from 'react-router-dom';

class Inbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ""
        }
    }

    componentDidMount() {
        this.props.fetchMessages()
            .then(()=>this.setState({url: this.props.location.pathName}));
    }

    componentDidUpdate() {
        if(this.state.url !== this.props.location.pathName) {
            this.props.fetchMessages()
                .then(()=>this.setState({url: this.props.location.pathName}));
        }
    }

    render() {
        // console.log(this.props);
        if(this.state.url !== this.props.location.pathName) {
            return;
        }
        return (
            <div className='inbox-page-container'>
                Message Inbox here
                <div className='clip-container'>
                    {this.props.messages.map((message) => {
                        if(message.receiverId == message.senderId) {
                            return;
                        }
                        return <Link
                            key={message.id}
                            className='conversations-container' 
                            to={`/user/inbox/${message.senderId === this.props.currentUserId ?
                                message.receiverId : message.senderId}`}>
                            <p className='sender'>
                            {message.senderId === this.props.currentUserId ?
                                this.props.users[message.receiverId].username :
                                this.props.users[message.senderId].username}
                            </p>
                            <span className='message'>{this.props.users[message.senderId].username}: {message.body}</span>
                        </Link>
                    })}
                </div>
            </div>
        )
    }
};

export default Inbox;