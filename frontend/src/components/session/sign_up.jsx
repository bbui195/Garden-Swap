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
            // .then(() => this.props.history.push("/"))
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
            <div className="session-form-container">
                <form onSubmit={this.handleSubmit} className="session-form">
                    {this.renderErrors()}
                    <p>Create Account</p> 
                    <div className='input-container'>
                        <label>
                            <p>Username:</p>
                            <input 
                                type='text' 
                                onChange={this.handleChange('username')}
                                className="input" 
                            />
                        </label>
                        <label>
                            <p>Password:</p> 
                            <input
                                placeholder='At least 6 characters'
                                name='password'
                                id='password' 
                                type='password'
                                onChange={this.handleChange('password')}
                                className="input"
                            />  
                        </label>                    
                        <input
                            type='submit' 
                            value='Sign Up'
                            onClick={this.handleSubmit} 
                            className='button'
                        />   
                        <p >Already have an account?<span><Link to='/login' className='link'> Sign-In</Link></span></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup




