import axios from "axios";
import { connect } from "react-redux";
import { createMessage, deleteMessage, getMessagesWith, receiveMessage, updateMessage } from "../../actions/message_actions";
import Conversation from "./conversation";

const mSTP = (state, ownProps) => {
    let messages = Object.values(state.entities.messages);
    messages.sort((a, b) => {
        return new Date(a.time) < new Date(b.time) ? -1 : 1;
    })
    messages.forEach((message) => {
        message.time = (new Date(message.time))
            .toLocaleString('en-US');
        // .toLocaleString(undefined, {day: "2-digit", month: "2-digit", year: "numeric"})
    })
    return {
        token: axios.defaults.headers.common["Authorization"],
        messages,
        currentUserId: state.session.currentUser.id,
        receiver: state.entities.users[ownProps.match.params.userId]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        createMessage: message => dispatch(createMessage(message)),
        updateMessage: message => dispatch(updateMessage(message)),
        deleteMessage: messageId => dispatch(deleteMessage(messageId)),
        receiveMessage: message => dispatch(receiveMessage(message)),
        fetchMessages: () => dispatch(getMessagesWith(ownProps.match.params.userId))
    };
};

export default connect(mSTP, mDTP)(Conversation)