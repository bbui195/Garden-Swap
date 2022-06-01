import { connect } from 'react-redux'
import UserShow from './user_show'


const mSTP = state => { 
    return {
        user: state.entities.user,
    }
}

export default connect(mSTP,null)(UserShow)