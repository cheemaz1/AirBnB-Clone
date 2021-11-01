import React from "react";

class SessionForm extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        //this.props.action(user).then(this.props.closeModal);

        // .then(() => {this.props.history.push("/")});
        // catch the action promise, and THEN on success, next place will be "/"
        // both login && signup has an action prop (cb) that takes "user" as an argument
    }


    render() {
        const birthday =
            this.props.formType === "signup" ? (
                <>
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
                </>
            ) : (
                <></>
            );

        const header = this.props.formType === "login" ? "LOG IN" : "SIGN UP";

        // const errors = this.renderErrors();
        return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit} className="login-box">
                    <br />
                    <h2 className="login-header">{header}</h2>
                    {/* {this.props.formType} or {this.props.navLink} */}
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />

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
                        <br />

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
                        <br />

                        {birthday}
                        <br />

                        <button className="session-submit" value={this.props.formType}>
                            {header}
                        </button>
                        {header !== "SIGN UP" ? (<button
                            className="session-submit"
                            onClick={() =>
                                this.props
                                    .login({ username: "u33", password: "123123" })
                                    .then(this.props.closeModal)}>Demo</button>) : <></>}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;