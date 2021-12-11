// //React
// import React from 'react';
// import ReactDOM from 'react-dom';
// //Components f
// import Root from './components/root';
// import configureStore from './store/store';


// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
//   window.store = store; 
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
// });
import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'
import { login, logout, signup } from './actions/session_actions'
import { fetchHomes } from './actions/home_action'
import { fetchBooking } from './actions/booking_action'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const { bookings, ...currentUser } = window.currentUser;
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: currentUser },
        bookings//: { [window.bookings]: bookings }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.login = login
  window.logout = logout
  window.signup = signup
  window.store = store
  window.dispatch = store.dispatch
  window.getState = store.getState
  window.fetchHomes = fetchHomes;
  window.fetchBooking = fetchBooking;

  ReactDOM.render(<Root store={store} />, document.getElementById('root'))
})


