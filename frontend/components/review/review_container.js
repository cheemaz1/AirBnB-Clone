import { connect } from "react-redux";
import {
    createReview,
    fetchHome,
    fetchReviews,
} from "../../actions/home_action";
import ReviewForm from "./review_form";
import { openModal } from "../../actions/modal_actions";
// import { clearErrors } from "../../actions/session_actions";

const mapState = (state, ownProps) => {
    return {
        errors: state.errors.review,
        review: {
            body: "",
            guest_id: state.session.id,
            home_id: ownProps.home.id,
        },
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchHome: (homeId) => dispatch(fetchHome(homeId)),
        createReview: (review) => dispatch(createReview(review)),
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        openModal: () => dispatch(openModal("login")),
        // clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mapState, mapDispatch)(ReviewForm);
