import React, { Component } from 'react';
import './google.scss'
class Google extends Component {
    render() {
        return (

            <div className='g-sign-in-button'>
                <div className="content-wrapper">
                    <div className='logo-wrapper'>
                        <img src='https://developers.google.com/identity/images/g-logo.png' alt="google" />
                    </div>
                    <span className='text-container'>
                        <span>Sign in with Google</span>
                    </span>
                </div>
            </div>
        )
    }
}

export default Google