import React, { useRef } from 'react';
import './styles.css'

const AuthPage = () => {
    const emailEl = useRef(null);
    const passwordEl = useRef(null);
    return (
        <form className="auth__form">
            <div className="form__header">
                <p>Sign in</p>
            </div>
            <div className="form__control">
                <input type="text" id="email" ref={emailEl}/>
                <label htmlFor="email" className="floating__label">Email</label>
            </div>
            <div className="form__control">
                <input type="text" id="email" ref={passwordEl}/>
                <label htmlFor="email" className="floating__label">Password</label>
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    );
}

export default AuthPage;