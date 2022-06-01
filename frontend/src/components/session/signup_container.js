import {connect} from 'react-redux'
import { createNewUser } from '../../actions/session_actions'
import Signup from './sign_up'
import { clearErrors } from '../../actions/session_actions';

const mSTP = ({ errors }) => {
    return {
        errors: Object.values(errors.session),
    };
};


const mDTP = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(Signup)