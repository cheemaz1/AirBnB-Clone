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
        this.props.action(user).then(() => {this.props.history.push("/")});

    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        const birthday =
            this.props.formType === "signup" ? (
                <>
                    <label>
                        First Name
                        <input
                            type="text"
                            value={this.state.first_name}
                            onChange={this.update("first_name")}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Last Name
                        <input
                            type="text"
                            value={this.state.last_name}
                            onChange={this.update("last_name")}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Birthday
                        <input
                            type="date"
                            value={this.state.birthday}
                            onChange={this.update("birthday")}
                            placeholder="Birthday"
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update("email")}
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <h2>{header}</h2>
                    {this.renderErrors()}
                    <div>
                        <br />

                        <label>
                            Username
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.update("username")}
                                required
                            />
                        </label>
                        <br />

                        <label>
                            Password
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.update("password")}
                                required
                            />
                        </label>
                        <br />

                        {birthday}
                        <br />

                        <button value={this.props.formType}>
                            {header}
                        </button>
    
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
