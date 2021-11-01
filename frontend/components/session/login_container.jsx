import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'login'
    };
};

const mapDispatch = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
    };
}

export default connect(mapState, mapDispatch)(SessionForm);