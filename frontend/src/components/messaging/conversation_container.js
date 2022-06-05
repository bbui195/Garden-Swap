import axios from "axios";
import { connect } from "react-redux";
import Conversation from "./conversation";

const mSTP = (state, ownProps) => {
    return {
        token: axios.defaults.headers.common["Authorization"],
        messages: Object.values(state.entities.messages),
        currentUserId: state.session.currentUser.id,
        receiver: state.entities.users[ownProps.match.params.userId]
    };
};

const mDTP = (dispatch, ownProps) => {
    return {
        createMessage: () => null,
        fetchMessages: () => null
    };
};

export default connect(mSTP, mDTP)(Conversation)