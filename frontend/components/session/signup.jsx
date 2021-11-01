import React from "react";

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            first_name: "",
            last_name: "",
            birthday: "",
            email: "",
        };

        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props
            .action(user)
       //     .then(() => this.props.history.push("/chirps")) need to do something else ;
    }

    render() {
        return (
            <div className="session-form">
                <h2>Sign up!</h2>
                <form>
                    <label className="login-label">
                        First Name
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            className="login-input"
                            required
                        />
                    </label>
                    <br />

                    <label className="login-label">
                        Last Name
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                            className="login-input"
                            required
                        />
                    </label>
                    <br />

                    <label className="login-label">
                        Birthday
                        <input
                            type="date"
                            value={this.state.birthday}
                            onChange={this.update("birthday")}
                            className="login-input"
                            required
                        />
                    </label>
                    <br />

                    <label className="login-label">
                        Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
                            className="login-input"
                            required
                        />
                    </label>
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
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default Signup;