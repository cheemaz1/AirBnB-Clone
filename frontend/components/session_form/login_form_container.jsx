import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import { clearErrors, login } from '../../actions/session_actions'
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP  = ({errors}) => {
    return {
        errors: errors.session,
        formType: 'login',
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        
        otherForm: (
        <div className="session-button" onClick={() => dispatch(openModal('signup'))}>
            Signup
        </div>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)