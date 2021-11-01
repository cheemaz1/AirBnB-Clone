import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        const currInput = e.target.name;
        return this.setState({
            [currInput]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props
            .login(this.state)
          //  .then(() => this.props.history.push("/chirps")); need to close modal instead 
    }

    render() {
        return (
            <div className="login-form">
                <label className="login-label">
                    Username
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.update("username")}
                        className="login-input"
                        required
                    />
                </label>
                <label className="login-label">
                    Password
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        className="login-input"
                        required
                    />
                </label>
                <button className="session-submit" value={this.props.formType}></button>
            </div>
            
        );
    }
}

export default Login;