import React from 'react'


class UserShow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { username, joined, rating } = this.props
        return(
            <ul>
                {/* <li>{username}</li>
                <li>{joined}</li>
                <li>{rating}</li> */}
                <h1>Hey cowboys!</h1>
            </ul>
        )
    }
}

export default UserShow