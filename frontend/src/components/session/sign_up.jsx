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
                        value='Sign Up'
                        onClick={this.handleSubmit} 
                    />

                    <p >Already have an account?<span><Link to='/login' > Sign-In</Link></span></p>

                </div>
            </div>
        )
    }
}

export default Signup




