import { connect } from 'react-redux';
import SearchBox from './searchbar';
import {requestUsers} from '../../actions/user_action';
import { withRouter } from "react-router-dom";


const mSTP = state => {
    return {
        users: state.entities.users
    }
}

const mDTP = dispatch => {
    return {
        
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchBox));