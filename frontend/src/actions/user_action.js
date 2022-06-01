import { fetchUser } from "../utils/user_utils";

export const RECEIVE_USER = 'RECEIVE_USER'

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const requestUser = userId => dispatch => {
    return fetchUser(userId)
        .then(user => dispatch(receiveUser(user)) )
}