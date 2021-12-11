import {connect} from 'react-redux'
import HomeShow from './home_show'
import { updateHome, fetchHomes, fetchHome, deleteHome} from '../../actions/home_action'
import { deleteReview, fetchReviews} from '../../actions/review_action'
import { createBooking } from '../../actions/booking_action'
import {updateFilter} from '../../actions/filter_actions'

const mSTP = (state, ownProps) => {
    console.log('statepropped')
    return{
        currentUser: state.entities.users[state.session.id],
        home: state.entities.homes[ownProps.match.params.homeId],
        homeId: ownProps.match.params.homeId,
        reviews: Object.values(state.entities.reviews),
    }
}

const mDTP = (dispatch) => {
    console.log('dispatched')
    return{
        fetchHomes: () => dispatch(fetchHomes()),
        fetchHome: (id) => dispatch(fetchHome(id)),
        deleteHome: (homeId) => dispatch(deleteHome(homeId)),
        updateHome: (home) => dispatch(updateHome(home)),
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        createBooking: (booking) => dispatch(createBooking(booking)),
        updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    }
}

export default connect(mSTP, mDTP)(HomeShow)