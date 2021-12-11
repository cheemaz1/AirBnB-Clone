import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      first_name:'',
      last_name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillUnmount(){
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
    this.props.processForm(user).then(this.props.closeModal);
  }

  demoUserSignin(demoUser){
      return e => {
        e.preventDefault()
        this.props.action(demoUser).then
        (() => {
          this.props.otherForm(demoUser).then(this.props.closeModal)
        })
      }
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.map((error, j) => (
  //         <li key={`error-${j}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    const demoUser = {
        username: 'DemoUser',
        password: 'DemoUser'
    }
    if (this.props.formType === 'login'){
      return (
      <form onSubmit={this.handleSubmit} className='login-form'>
        <div className='modal-header'>
          <div className='close-modal' onClick={this.props.closeModal}>&times;</div>
          <div className='modal-header-message'>
            Welcome to CozyBnB
          </div>
        </div>
        <div className='modal-content'>
          <label className='login-box'>
              <input type="Username"
              placeholder='Username'
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              />
          </label>

          <label className='login-box'>
              <input type="password"
              placeholder='Password'
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              />
          </label>
        </div>
          <div className='signup-button-container'>
            <button className="session-button" value={this.props.formType}>{this.props.formType}</button>
          </div>
          <div className='modal-footer'>
            Please {this.props.formType} or 
            <span>{this.props.otherForm}</span>
          </div>
          <div className='error'>
            {this.props.errors.session ? this.props.errors.session.invalid : ''}
          </div>
      </form>
    )} else {
    return (
      <form onSubmit={this.handleSubmit} className="login-form">
          <div className='modal-header'>
            <div className='close-modal' onClick={this.props.closeModal}>&times;</div>
            <div className='modal-header-message'>
              Welcome to CozyBnB
            </div>
          </div>
          <div className='modal-content'>
            <label className='login-box'>
                <input type="username"
                placeholder='Username'
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                />
            </label>
            {this.props.errors.session ? this.props.errors.session.username : ''}
            <label className='login-box'>
                <input type="password"
                placeholder='Password'
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                />
            
            </label>
            {this.props.errors.session ? this.props.errors.session.password : ''}
            <label className='login-box'>
              <input type="email"
                placeholder='Email'
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            {this.props.errors.session ? this.props.errors.session.email : ''}    
            <label className='login-box'>
              <input type="first_name"
                placeholder='First Name'
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="login-input"
              />
            </label>
            {this.props.errors.session ? this.props.errors.session.first : ''}
            <label className='login-box'>
              <input type="last_name"
                placeholder='Last Name'
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="login-input"
              />
            </label>
            {this.props.errors.session ? this.props.errors.session.last : ''}
          </div>
          <div className='signup-button-container'>
            <button className="session-button" value={this.props.formType}>{this.props.formType}</button>
          </div>
          <div className='modal-footer'>
            <h1>Please {this.props.formType} or</h1>
            <span>{this.props.otherForm}</span>
          </div>
      </form>
      );
    }
  }
}
export default SessionForm;
