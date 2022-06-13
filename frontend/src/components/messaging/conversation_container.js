import axios from "axios";
import { connect } from "react-redux";
import { createMessage, deleteMessage, getMessagesWith, receiveMessage, updateMessage } from "../../actions/message_actions";
import Conversation from "./conversation";
import { selectMessages } from "../../utils/message_selector";
const mSTP = (state, ownProps) => {
    return {
        token: axios.defaults.headers.common["Authorization"],
        messages: selectMessages(state),
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