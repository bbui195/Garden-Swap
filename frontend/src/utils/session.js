import axios from "axios";

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};



export const signup = userData => (
    axios.post('/api/users/register', userData)
)

export const login = userData => (
    axios.post('/api/users/login', userData)
)

// export const postUser = user => (
//     $.ajax({
//         url: '/api/users',
//         method: 'POST',
//         data: {user}
//     })
// )

// export const postSession = user => (
//     $.ajax({
//         url: 'api/session',
//         method: 'POST',
//         data: { user }
//     })
// )


// export const deleteSession = () => (
//     $.ajax({
//         url: '/api/session',
//         method: 'DELETE'
//     })
// )