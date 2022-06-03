import axios from "axios";
import { connect } from "react-redux";
import Conversation from "./conversation";

const mSTP = state => {
    return {
        token: axios.defaults.headers.common["Authorization"]
    };
};

const mDTP = dispatch => {
    return {

    };
};

export default connect(mSTP, mDTP)(Conversation)