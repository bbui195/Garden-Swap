import * as MessageApiUtil from "../utils/message_api_util";

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        message
    };
};

const receiveMessages = ({messages, users}) => {
    return {
        type: RECEIVE_MESSAGES,
        messages,
        users
    };
};

export const getMessagesWith = userId => dispatch => {
    return MessageApiUtil.getMessagesWith(userId)
        .then((res) => dispatch(receiveMessages(res.data)));
};

export const createMessage = message => dispatch => {
    return MessageApiUtil.createMessage(message);
};

export const updateMessage = message => dispatch => {
    return MessageApiUtil.editMessage(message);
};

export const deleteMessage = messageId => dispatch => {
    return MessageApiUtil.deleteMessage(messageId);
};

export const getRecentMessages = () => dispatch => {
    return MessageApiUtil.fetchRecentMessages()
        .then((res) => dispatch(receiveMessages(res.data)));
}