import { connect } from "react-redux";
import { createReview, deleteReview,fetchReview } from "../../actions/review_action";
import ReviewsForm from "./reviews_form";
import { openModal } from '../../actions/modal_actions'
import {login} from '../../actions/session_actions'

const mSTP = (state, ownProps) => {
    return({
        currentUser: state.entities.users[state.session.id],
        reviews: state.entities.reviews,
        review_name: "",
        body: "",
        rating: 0,
        user_id: state.session.id,
        home_id: parseInt(ownProps.homeId),
        reviewErrors: state.errors.review
    })
};

const mDTP = dispatch => ({
    fetchReview: (review) => dispatch(fetchReview(review)),
    createReview: review => dispatch(createReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId)),
    openModal: (e) => dispatch(openModal(e)),
    login: (user) => dispatch(login(user))
});

export default connect(mSTP, mDTP)(ReviewsForm);