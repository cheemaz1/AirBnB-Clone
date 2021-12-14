import * as userApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})
const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUser = userId => dispatch => (
    userApiUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)

export const fetchUsers = () => dispatch => (
    userApiUtil.fetchUsers()
        .then(users => dispatch(receiveUsers(users)))
)

export const updateUser = user => dispatch => (
    userApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
)