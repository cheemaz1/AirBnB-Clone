import { connect } from "react-redux";
import { createListing } from "../../actions/listings_actions";
import CreateListing from "./create_listing";
import { openModal, closeModal } from "../../actions/modal_actions";

const mSTP = state => ({
  listing: {
    title: "",
    description: "",
    city: "",
    location: "",

    num_beds: "",
    longitude: "",
    latitude: "",
    price: "",
    photos: [],
  },
});

const mDTP = dispatch => ({
  createListing: listing => dispatch(createListing(listing)),
  spinner: () => dispatch(openModal('spinner')),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mSTP, mDTP)(CreateListing);
