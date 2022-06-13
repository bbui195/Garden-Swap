import React from 'react';
import socketIOClient from "socket.io-client";


class Conversation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: undefined,
            message: "",
            editing: false,
            editMessage: "",
            creating: true,
            url: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.stopEdit = this.stopEdit.bind(this);
        this.submitEdit = this.submitEdit.bind(this);
    }

    componentDidMount() {
        this.props.fetchMessages()
            .then(()=>this.setState({url: this.props.location.pathName}));
        let socket = socketIOClient("http://localhost:5002", {
            withCredentials: true,
            extraHeaders: {
                token: this.props.token
            }
        });
        socket.on("message", (message) => {
            this.props.receiveMessage(message);
        });
        this.setState({
            socket
        });
    }

    componentDidUpdate() {
        if(this.state.url !== this.props.location.pathName) {
            this.props.fetchMessages()
                .then(()=>this.setState({url: this.props.location.pathName}));
        }
        if(this.state.focusEdit) {
            document.getElementsByClassName("edit-input")[0].focus();
            this.setState({
                focusEdit: false
            })
        }
    }

    componentWillUnmount() {
        if(this.state.socket) {
            // console.log("disconnecting")
            this.state.socket.disconnect();
        }
        this.setState({ socket: undefined });
    }

    handleChange(type) {
        return (e) => {
            // console.log(this.state);
            this.setState({[type]: e.target.value})
        };
    }

    handleEditClick(message) {
        return (e) => this.setState({
            editing: message.id,
            editMessage: message.body,
            focusEdit: true
        });
    }

    submitEdit() {
        if(this.state.editMessage !== "") {
            this.props.updateMessage({
                id: this.state.editing,
                body: this.state.editMessage
            });
            this.stopEdit();
        }
    }

    handleEditSubmit(e) {
        if(e.key !== "Enter") {
            return;
        }
        this.submitEdit();
    }

    stopEdit() {
        this.setState({
            editing: undefined,
            editMessage: "",
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.creating && this.state.message !== "") {
            this.props.createMessage({
                body: this.state.message,
                userId: this.props.receiver.id
            });
            this.setState({ message: "" });
        };
    }

    render() {
        if (!this.props.receiver) {
            return;
        }
        if(this.state.url !== this.props.location.pathName) {
            return
        }
        return (
            <div className="message-index">

                <div className="messages-wrapper">
                    <div className="messages">
                        {this.props.messages.map((message) => {
                            return <div key={message.id}
                                className={("message" +
                                    (this.state.editing === message.id ? " editing" : ""))}>
                                <div className="profile"><i className="fa-brands fa-discord" /></div>
                                {/* replace above with profile pic */}
                                <span className="username">{message.username}</span>
                                <span className="time">{message.time}</span>
                                {this.state.editing === message.id ?
                                    <>
                                        <input type="text" className="edit-input"
                                            value={this.state.editMessage}
                                            onChange={this.handleChange("editMessage")}
                                            onKeyDown={this.handleEditSubmit} />
                                        <div className="edit-label">escape to&nbsp;
                                            <span onClick={this.stopEdit}
                                            >cancel</span> • enter to&nbsp;
                                            <span onClick={this.submitEdit}
                                            >save</span></div>
                                    </>
                                    : <div className="body">{message.body}</div>}
                                {message.senderId === this.props.currentUserId ?
                                    <div className="edit-options">
                                        <div className="edit" name="Edit"
                                            onClick={this.handleEditClick(message)}
                                        >
                                            <i className="fa-solid fa-pencil"></i>
                                        </div>

                                        <div className="delete" name="Delete"
                                            onClick={()=>{
                                                this.props.deleteMessage(message.id);
                                            }}
                                        ><i className="fa-solid fa-trash-can"></i></div>

                                    </div> : null
                                }
                            </div>
                        })}
                    </div>
                </div>
                <form
                    onSubmit={this.handleSubmit}
                    className="message-form"
                >
                    <input type="text" className="message-input"
                        placeholder={`Message ${this.props.receiver.username}`}
                        value={this.state.message}
                        onChange={this.handleChange("message")}
                        onKeyDown={(e) => e.key === "ArrowUp" ? this.editLast() : null}
                    />
                </form>
            </div>
        )
    }
};

export default Conversation;