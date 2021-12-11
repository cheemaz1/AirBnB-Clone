import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = 'RECEIVE_HOMES'
export const RECEIVE_HOME = 'RECEIVE_HOME'
export const REMOVE_HOME = 'REMOVE_HOME'
export const RECEIVE_HOME_ERRORS = 'RECEIVE_HOME_ERRORS ';

export const receiveHomes = homes => ({
    type: RECEIVE_HOMES,
    homes, 
})

export const receiveHome = home => ({
    type: RECEIVE_HOME,
    home, 
})

export const removeHome = homeId => ({
    type: REMOVE_HOME,
    homeId
})

export const receiveErrors = errors => ({
    type: RECEIVE_HOME_ERRORS,
    errors
});


export const fetchHomes = (location) => dispatch => (
  APIUtil.fetchHomes(location).then(homes => (
    dispatch(receiveHomes(homes))
  ))
);

export const fetchHome = home => dispatch => (
  APIUtil.fetchHome(home).then(home => (
    dispatch(receiveHome(home))
  ))
);

export const createHome = home => dispatch => (
  APIUtil.createHome(home).then(home => (
    dispatch(receiveHome(home))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateHome = (formData, homeId) => dispatch => (
  APIUtil.updateHome(formData, homeId).then(home => (
    dispatch(receiveHome(home))), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const deleteHome = homeId => dispatch => (
  APIUtil.deleteHome(homeId).then(homeId =>(
    dispatch(removeHome(homeId))
  ))
)

