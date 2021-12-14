import { connect } from 'react-redux';
import React from 'react';
import { fetchUser, updateUser } from '../../actions/user_actions';
import UserShow from './users_show';
import { openModal } from '../../actions/modal_actions';
import { fetchListings } from '../../actions/listings_actions';
import { deleteReview, editReview } from '../../actions/reviews_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    listings: Object.values(state.entities.listings),
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    updateUser: user => dispatch(updateUser(user)),
    editReview: review => dispatch(editReview(review)),
    deleteReview: reviewId => dispatch(deleteReview(reviewId))
})

export default connect(mSTP, mDTP)(UserShow);