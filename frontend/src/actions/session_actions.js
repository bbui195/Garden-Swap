import * as SessionApiUtil  from '../utils/session'
import jwt_decode from 'jwt-decode';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const LOGOUT_CURRENT_USER =  'LOGOUT_CURRENT_USER'
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
})


const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const loginUser = formUser => dispatch => (
    SessionApiUtil.login(formUser)
        .then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            SessionApiUtil.setAuthToken(response.data.token);
            // return dispatch(receiveCurrentUser(response.data.user));
            return dispatch(receiveCurrentUser(jwt_decode(response.data.token)));
        }, 
        error => (dispatch(receiveErrors(error.response.data))))
)

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken');
    SessionApiUtil.setAuthToken(false);
    dispatch(logoutCurrentUser());
};

export const createNewUser = formUser => dispatch => {
    return SessionApiUtil.signup(formUser)
        // .then(user => dispatch(receiveCurrentUser(user)),
        .then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            SessionApiUtil.setAuthToken(response.data.token);
            // console.log("asdasdasdasdas", jwt_decode(response.data.token));
            // return dispatch(receiveCurrentUser(response.data.user));
            return dispatch(receiveCurrentUser(jwt_decode(response.data.token)));
        },
        error => {
            // console.log('errors',error);
            dispatch(receiveErrors(error.response.data));
        })
}







