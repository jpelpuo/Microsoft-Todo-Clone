import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { registerRequest } from '../../redux/actions/registerActions';
import { failureAlert } from '../../redux/actions/alertActions'
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Spinner'
import "./styles.css";

const RegisterPage = (props) => {
    const firstNameEl = useRef(null);
    const lastNameEl = useRef(null);
    const emailEl = useRef(null);
    const passwordEl = useRef(null);
    const confirmPasswordEl = useRef(null);

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const validatePasswords = () => {
        const password = passwordEl.current.value;
        const confirmPassword = confirmPasswordEl.current.value;

        if (password === confirmPassword) {
            return password;
        }
        return;
    }

    const handleSubmit = e => {
        e.preventDefault();

        const firstName = firstNameEl.current.value;
        const lastName = lastNameEl.current.value;
        const email = emailEl.current.value;


        const password = validatePasswords();

        if (!password) {
            dispatch(failureAlert("Passwords are not equal"));
            return;
        }

        console.log(state.alert.message)

        dispatch(registerRequest({ firstName, lastName, email, password }))
    }

    return (
        <div className="register__wrapper">
            <form className="register__form" onSubmit={handleSubmit}>
                <div className="register__form__header">
                    <span>Create Account</span>
                </div>
                {state.alert.message &&
                    <div className={`alert ${state.alert.type}`}>
                        <span className="">{state.alert.message}</span>
                    </div>
                }

                <div className="form__control">
                    <input type="text" id="firstName" ref={firstNameEl} required />
                    <label htmlFor="firstName" className="floating__label">First Name</label>
                </div>
                <div className="form__control">
                    <input type="text" id="lastName" ref={lastNameEl} required />
                    <label htmlFor="lasttName" className="floating__label">Last Name</label>
                </div>
                <div className="form__control">
                    <input type="text" id="email" ref={emailEl} required />
                    <label htmlFor="email" className="floating__label">Email</label>
                </div>
                <div className={`form__control ${state.alert.type === "alert-failure" ? "form__control__error" : ""}`}>
                    <input type="password" id="password" ref={passwordEl} required />
                    <label htmlFor="firstName" className="floating__label">Password</label>
                </div>
                <div className={`form__control ${state.alert.type === "alert-failure" ? "form__control__error" : ""}`}>
                    <input type="password" id="confirm_password" ref={confirmPasswordEl} required />
                    <label htmlFor="confirm__password" className="floating__label">Confirm Password</label>
                </div>
                <div className="form__actions">
                    <button className="btn" type="submit">
                        {
                            state.register.registering ? <Spinner color="#0080ff" size="1rem" /> : "Create Account"
                        }
                    </button>
                    <div>
                        <span>Have an account? <Link to="/auth">Sign in</Link></span>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;