import React from 'react'
import './Login.scss';
import Google from '../google/google';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.validate()) {

            let input = {};
            input["name"] = "";
            input["email"] = "";
            input["comment"] = "";
            this.setState({ input: input });

            alert('Demo Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            document.getElementById("email").className = 'error'
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} name="myForm">
                    <h3>Welcome to Invision</h3>
                    <div className="input-container">
                        <input type="input" name="email" id="email" placeholder="Email" value={this.state.input.email} onChange={this.handleChange} />
                        <label for="input">Email</label>
                        <div className="bottom-line"></div>
                        <div className="text-danger">{this.state.errors.email}</div>
                    </div>
                    <div className="input-container">
                        <input type="password" id="password" placeholder="Password" />
                        <label for="password">Password</label>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="right-align">
                        <h6>
                            <a href="/">Forgot password?</a>
                        </h6>
                    </div>
                    <button value="Submit">Sign in</button>
                </form>
                <h6>
                    New Invision? <a href="/signup">Create Account</a>
                </h6>

                <div className="margin">
                    <Google />
                </div>
                <div>
                    <p>New <b>Invision</b>? <a href="/signup">Create Account</a></p>
                </div>
            </div >
        );
    }
}

export default Login