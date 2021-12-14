import { connect } from "react-redux";
import { createBooking } from "../../actions/bookings_actions";
import CreateBooking from "./booking_form";
import { withRouter } from "react-router";
import { openModal } from "../../actions/modal_actions";

const mSTP = (state, ownProps) => ({
  booking: {
    check_in_date: "",
    check_out_date: "",
    guest_id: state.session.id,
    listing_id: ownProps.match.params.listingId,
    number_of_guest: "",
    price: "",
  },
  listingPrice: state.entities.listings[ownProps.match.params.listingId].price,
  currentUserId: state.session.id
});

const mDTP = dispatch => ({
  createBooking: booking => dispatch(createBooking(booking)),
  openModal: () => dispatch(openModal("login")),
});

export default withRouter(connect(mSTP, mDTP)(CreateBooking));
