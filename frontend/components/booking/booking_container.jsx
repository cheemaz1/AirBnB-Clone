import {connect} from 'react-redux'
import BookingForm from './booking_form'
import { createBooking } from '../../actions/booking_action'
import { openModal } from '../../actions/modal_actions'
import {login} from '../../actions/session_actions'


const mSTP = (state, ownProps) => ({    
    booking: {
        check_in: null,
        check_out: null,
        num_guests: 1,
        guest_id: state.session.id
    }, 
    currentUser: state.entities.users[state.session.id],
})

const mDTP = dispatch => ({
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user)),
    createBooking: (formData) => dispatch(createBooking(formData))
})

export default connect(mSTP, mDTP)(BookingForm)