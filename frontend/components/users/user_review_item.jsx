import React from "react";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
class UserReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.review,
      editOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors;
  }

  handleChange(e, field) {
    let review = this.state.review;
    review[field] = e.currentTarget.value;
    this.setState({ review: review });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.review.rating === "" ||
      this.state.review.body === ""
    ) {
      this.errors = (
        <p className="review-form-errors">
          Please fill out all the required fields
        </p>
      );
      this.setState(this.state);
    } else {
      let rating =
        parseInt(this.state.rating);
      this.setState({ rating: rating }, () => {
        this.props.editReview(this.state.review).then(() => {
          this.props.fetchUser(this.props.review.guest_id);
          this.setState({ editOpen: false });
        });
      });

      this.errors = null;
    }
  }

  handleDelete() {
    // document.getElementById('delete-review').innerText = 'Deleting'
    let guestId = this.props.review.guest_id;
    this.props
      .deleteReview(this.props.review.id)
      .then(() => this.props.fetchUser(guestId));
  }

  render() {
    let review = this.props.review;
    let options = (options = {
      year: "numeric",
      month: "long",
    });
    let createdAt = new Date(review.created_at).toLocaleDateString(
      "en-US",
      options
    );

    let reviewReturn = !this.state.editOpen ? (
      <>
        <Link
          to={`/listing/show/${review.listing.id}`}
          className="user-review-listing-photo-container"
        >
          <img
            className="user-review-listing-photo"
            src={review.photos[0]}
            alt="Listing Photo"
          />
        </Link>
        <div className="user-review-info-container">
          <div className="user-review-listing-title-container">
            <h5 className="user-review-listing-title">
              Review for {review.listing.title}
            </h5>
          </div>
          <div className="user-review-body-container">
            <p className="user-review-body">{review.body}</p>
          </div>
          <div className="user-review-created-at-container">
            <p className="user-review-created-at">{createdAt}</p>
          </div>
          <div className="review-edit-delete-button-container">
              <span
                className="edit-review-button"
                onClick={() => this.setState({ editOpen: true })}
              >
                Edit
              </span>
              <span
                id='delete-review'
                className="delete-review-button"
                onClick={() => this.handleDelete()}
              >
                Delete
              </span>
            </div>
        </div>
      </>
    ) : (
      <div className="review-form-container">
        <span className='review-cancel-edit' onClick={() => this.setState({ editOpen: false })}>Cancel</span>
        <form className="create-review-form" onSubmit={this.handleSubmit}>
          <textarea
            className="review-body"
            onChange={e => this.handleChange(e, "body")}
            placeholder="Review"
            value={this.state.review.body}
          />

          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">rating</h6>
            <div className="review-stars-container">
              <label htmlFor="rating1">
                <StarIcon
                  className={
                    this.state.review.rating >= 1
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="rating1"
                name="rating"
                value="1"
                onChange={e => this.handleChange(e, "rating")}
              />
              <label htmlFor="rating2">
                <StarIcon
                  className={
                    this.state.review.rating >= 2
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="rating2"
                name="rating"
                value="2"
                onChange={e => this.handleChange(e, "rating")}
              />
              <label htmlFor="rating3">
                <StarIcon
                  className={
                    this.state.review.rating >= 3
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="rating3"
                name="rating"
                value="3"
                onChange={e => this.handleChange(e, "rating")}
              />
              <label htmlFor="rating4">
                <StarIcon
                  className={
                    this.state.review.rating >= 4
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="rating4"
                name="rating"
                value="4"
                onChange={e => this.handleChange(e, "rating")}
              />
              <label htmlFor="rating5">
                <StarIcon
                  className={
                    this.state.review.rating >= 5
                      ? "review-number-selected"
                      : "review-number-not-selected"
                  }
                />
              </label>
              <input
                type="radio"
                id="rating5"
                name="rating"
                value="5"
                onChange={e => this.handleChange(e, "rating")}
              />
            </div>
          </div>
          

          <button className="leave-review-form-button">Update Review</button>
          {this.errors}
        </form>
      </div>
    );

    return <div className="user-review-container">{reviewReturn}</div>;
  }
}

export default UserReviewItem;
