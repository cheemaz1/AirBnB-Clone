import {connect} from 'react-redux';
import BookingPage from './booking_page';
import { deleteBooking, fetchBooking, fetchBookings, createBooking } from '../../actions/booking_action';
import {fetchHomes, fetchHome} from '../../actions/home_action';

const mSTP = (state) => ({
    bookings: Object.values(state.entities.bookings),
    currentUser: state.entities.users[state.session.id],
    homes: state.entities.homes
})

const mDTP = dispatch => ({
    deleteBooking: (id) => dispatch(deleteBooking(id)),
    fetchBookings: () => dispatch(fetchBookings()),
    fetchBooking: (user_id) => dispatch(fetchBooking(user_id)),
    fetchHomes: () => dispatch(fetchHomes()),
})

export default connect(mSTP, mDTP)(BookingPage)
