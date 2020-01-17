import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Log in',
        navLink: <Link to="/signup">Sign up instead</Link>,
    };
};

const mDTP = dispatch => {
    const demouser = { username: "Guest", password: "test123" };

    return {
        action: (user) => dispatch(login(user)),
        demoLogin: () => dispatch(login(demouser)),
    };
};

export default connect(mSTP, mDTP)(SessionForm);
