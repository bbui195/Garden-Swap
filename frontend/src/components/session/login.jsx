import React from 'react';
import { Link } from 'react-router-dom';
import veggieDoodle from "../../assets/images/veggie_doodle.png";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this)
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    const user = {
      username: 'demouser',
      password: '123456'
    }
    this.props.processForm(user);
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

  render() {
    return (
      <div>
        <div>
        </div>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="session-form">
            <br/>
            <p>Sign In</p> 
            {this.renderErrors()}
            <div className='input-container'>
              <label>
                <p>Username:</p>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="input"
                />
              </label>
              <label>
                <p>Password:</p>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="input"
                />
              </label>
              <input type="submit" value='Sign In' className='button'/>
              <p className='or'>or</p>
              <button onClick={this.handleDemo} className='button'>Demo User</button> 
            
              <p>New User?<Link to='/signup' className='link'><span> Start here</span></Link></p> 
                  
            </div> 
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
