import React from "react";
import StarIcon from "@material-ui/icons/Star";

class CreateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.review;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors;
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (
      this.state.rating === "" ||
      this.state.body === ""
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
        this.props.createReview(this.state).then(() => this.props.closeModal());
      });

      this.errors = null;
    }
  }

  render() {
    return (
      <div className="review-form-container">
        <form className="create-review-form" onSubmit={this.handleSubmit}>
          <textarea
            className="review-body"
            onChange={this.handleChange("body")}
            placeholder="Review"
            value={this.state.body}
          />
          <div className="review-rating-section-container">
            <h6 className="review-rating-section-h6">Rating</h6>
            <div className="review-stars-container">
              <label htmlFor="rating1">
                <StarIcon
                  className={
                    this.state.rating >= 1
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
                onChange={this.handleChange("rating")}
              />
              <label htmlFor="rating2">
                <StarIcon
                  className={
                    this.state.rating >= 2
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
                onChange={this.handleChange("rating")}
              />
              <label htmlFor="rating3">
                <StarIcon
                  className={
                    this.state.rating >= 3
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
                onChange={this.handleChange("rating")}
              />
              <label htmlFor="rating4">
                <StarIcon
                  className={
                    this.state.rating >= 4
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
                onChange={this.handleChange("rating")}
              />
              <label htmlFor="rating5">
                <StarIcon
                  className={
                    this.state.rating >= 5
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
                onChange={this.handleChange("rating")}
              />
            </div>
          </div>

          <button className="leave-review-form-button">Leave Review</button>
          {this.errors}
        </form>
      </div>
    );
  }
}

export default CreateReview;
