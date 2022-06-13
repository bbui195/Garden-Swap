import axios from 'axios'

export const getMessagesWith = (userId) => {
    return axios.get(`api/messages/${userId}`);
};

export const createMessage = (message) => {
    return axios.post(`api/messages`, message);
};

export const editMessage = (message) => {
    return axios.patch(`api/messages/${message.id}`, message);
};

export const deleteMessage = (messageId) => {
    return axios.delete(`api/messages/${messageId}`);
};

export const fetchRecentMessages = () => {
    return axios.get(`api/messages`);
}