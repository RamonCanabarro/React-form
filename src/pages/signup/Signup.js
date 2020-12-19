import React, { Component } from 'react'
import './Signup.scss';
import Google from '../google/google';

class Signup extends Component {
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
            console.log(this.state);

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

        console.log(input)
        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["comment"]) {
            isValid = false;
            errors["comment"] = "Please enter your comment.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Getting Started</h3>
                    <div className="input-container">
                        <input name="email" value={this.state.input.email} onChange={this.handleChange} type="email" id="input" placeholder="Email" />
                        <label for="input">Email</label>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="input-container">
                        <input name="name" type="text" id="name" value={this.state.input.name} onChange={this.handleChange} placeholder="Full Name" />
                        <label for="name">Full Name</label>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="input-container">
                        <input type="password" id="password" placeholder="Password" />
                        <label for="password">Password</label>
                        <div className="bottom-line"></div>
                    </div>
                    <div className="right-align">
                        <h6>
                            <a href="/signup">Forgot password?</a>
                        </h6>
                    </div>
                    <button value="submit">Sign in</button>

                    <div className="margin">
                        <Google />
                    </div>
                    <div>
                        <p>By signing up, you agree to <b>Invision</b></p>
                        <p><a href="/signup">Terms of Conditions</a> and <a href="/signup">Privacy Policy</a></p>

                        <p> Already on <b>Invision</b>?<a href="/">Log In</a></p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup