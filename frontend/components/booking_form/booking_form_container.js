import { connect } from "react-redux";
import { createBooking } from "../../actions/bookings_actions";
import CreateBooking from "./booking_form";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
    booking: {
        check_in: "",
        check_out: "",
        guest_id: state.session.id,
        home_id: ownProps.match.params.homeId,
        num_guests: "",
    },
    // listingPrice: state.entities.listings[ownProps.match.params.listingId].price,
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
    createBooking: booking => dispatch(createBooking(booking)),
    openModal: () => dispatch(openModal("login")),
});

export default withRouter(connect(mSTP, mDTP)(CreateBooking));
