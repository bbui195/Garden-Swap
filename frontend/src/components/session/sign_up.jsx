import React from 'react'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
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
                    <label htmlFor='name'>Your name</label>
                    <br></br>
                    <input
                        placeholder='First and last name'
                        name='name' 
                        id='name' 
                        type='text'

                        onChange={this.handleChange('name')} 
                    />
                    <br></br>
                    <label htmlFor='email'>Mobile number or email</label>
                    <br></br>
                    <input 
                        name='email' 
                        id='email' 
                        type='text' 
                        onChange={this.handleChange('email')} 
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

                    <div >
                        <p>By creating an account, you agree to Nile's <Link to='/' ><span>Conditions of Use</span></Link> and <Link to='/' ><span>Privacy Notice.</span></Link></p>
                    </div>
                    <p >Already have an account?<span><Link to='/login' > Sign-In</Link></span></p>
                    <p >Buying for work?<Link to='/signup' ><span>Create a free business account</span></Link></p>
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




