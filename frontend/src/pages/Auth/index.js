import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../redux/actions/authActions';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner'
import './styles.css';

const AuthPage = (props) => {
    const emailEl = useRef(null);
    const passwordEl = useRef(null);

    const authState = useSelector(state => state);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailEl.current.value;
        const password = passwordEl.current.value;
        dispatch(loginRequest({ email, password }));
    }


    return (
        <div className="auth__wrapper">
            <form className="auth__form" onSubmit={handleSubmit}>
                <div className="form__header">
                    <span>Sign in</span>
                </div>
                {authState.alert.message &&
                    <div className="error__message">
                        <span className="">{authState.alert.message}</span>
                    </div>
                }

                <div className={`form__control ${authState.alert.message ? "form__control__error" : ""}`}>
                    <input type="text" id="email" ref={emailEl} required />
                    <label htmlFor="email" className="floating__label " >Email</label>
                </div>
                <div className={`form__control ${authState.alert.message ? "form__control__error" : ""}`}>
                    <input type="password" id="password" ref={passwordEl} required />
                    <label htmlFor="password" className="floating__label">Password</label>
                </div>
                <div className="form__actions">
                    <button className="btn" type="submit">
                        {
                            authState.authentication.loggingIn ? <Spinner color="#0080ff" size="1rem" /> : "Sign in"
                        }
                    </button>
                    <div>
                        <span>Don't have an account? <Link to="/register">Register</Link></span>
                    </div>
                </div>
            </form>
        </div>

    );
}


export default AuthPage;