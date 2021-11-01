import * as SessionAPIUtil from "../util/session_api_util";

/*
    login(user) (thunk action creator)
    logout() (thunk action creator)
    signup(user) (thunk action creator)
    receiveCurrentUser(currentUser) (regular action creator)
    logoutCurrentUser() (regular action creator)
    receiveErrors(errors) (regular action creator)
 */

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
});

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
    SessionAPIUtil.signup(user)
        .then(user => { dispatch(receiveCurrentUser(user)); dispatch(clearErrors()) },
            error => (dispatch(receiveErrors(error.responseJSON)))));

export const login = user => dispatch => (
    SessionAPIUtil.login(user)
        .then(user => { dispatch(receiveCurrentUser(user)); dispatch(clearErrors()) },
            error => (dispatch(receiveErrors(error.responseJSON)))));

export const logout = () => dispatch => (
    SessionAPIUtil.logout().then(user => (dispatch(logoutCurrentUser()))));

