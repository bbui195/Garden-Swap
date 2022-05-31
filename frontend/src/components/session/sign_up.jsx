import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
            .then( ()=> this.props.history.push())
    }

    renderErrors() {
        return(
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            ))}
          </ul>
        );
      }

    componentDidMount() {
        this.props.clearErrors()
    }

    render() {
        return (
            <div>
                <div>
                   {this.renderErrors()}
                    <form onSubmit={this.handleSubmit}>Create Account</form>
                    <label htmlFor='username'>Username:</label>
                    <br></br>
                    <input 
                        type='text' 
                        onChange={this.handleChange('username')} 
                    />
                    <br></br>
                    <label htmlFor='password'>Password</label>
                    <br></br>
                    <input
                        placeholder='At least 6 characters'
                        name='password'
                        id='password' 
                        type='password'
                        onChange={this.handleChange('password')}
                    />

                    <p>Passwords must be at least 6 characters</p>
                   
                    <input
                
                        type='submit' 
                        value='Continue'
                        onClick={this.handleSubmit} 
                    />

                    <p >Already have an account?<span><Link to='/login' > Sign-In</Link></span></p>

                </div>

                
                <footer>
                    <ul>
                        <Link to='/'><li>Conditions of Use</li></Link>
                        <Link to='/'><li>Privacy Notice</li></Link>
                        <Link to='/'><li>Help</li></Link>
                    </ul>
                </footer>
                <p>&copy; 2020, gardenswap.com, Inc. or its affiliates</p>
            </div>
        )
    }
}

export default Signup




