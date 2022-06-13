import { connect } from "react-redux";
import Inbox from "./inbox";
import { getRecentMessages } from "../../actions/message_actions";
import { selectMessages } from "../../utils/message_selector";

const mSTP = state => {
    return {
        messages: selectMessages(state) || [],
        currentUserId: state.session.currentUser.id,
        users: state.entities.users
    };
};

const mDTP = dispatch => {
    return {
        fetchMessages: () => dispatch(getRecentMessages())
    };
};

export default connect(mSTP, mDTP)(Inbox)