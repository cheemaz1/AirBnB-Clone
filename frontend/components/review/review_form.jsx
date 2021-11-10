import React from "react";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.review.guest_id) {
            this.props
                .createReview(this.state)
                .then(this.props.fetchHome(this.state.home_id))
                .then(this.props.fetchReviews(this.state.home_id))
                // .then(this.props.clearErrors())
                .then(this.clearReview());
        } else {
            this.props.openModal("login");
        }
    }

    clearReview() {
        let writeReview = Array.from(
            document.getElementsByClassName("review-stars")
        );
        writeReview.forEach((star) => (star.checked = false));
        let textArea = document.getElementById("review-textarea");
        textArea.className = "review-no-body-error";
        this.setState(this.props.review);
    }

    //   renderErrors() {
    //     if (this.props.errors.length) {
    //       let textArea = document.getElementById("review-textarea");
    //       textArea.className = "review-yes-body-error";
    //       return (
    //         <div className="review-errors">
    //           {this.props.errors.map((error, idx) => (
    //             <p className="error" key={idx}>
    //               {error}
    //             </p>
    //           ))}
    //         </div>
    //       );
    //     } else {
    //       return null;
    //     }
    //   }

    update(field) {
        return (e) => this.setState({ [field]: e.target.value });
    }

    handleRating(rating) {
        return this.setState({ rating: rating });
    }

    render() {
        // let errors = this.renderErrors();
        return (
            <form className="review-form-container">
                <div className="review-top">
                    <h3>Leave a review</h3>
                </div>
                <div className="review-mid">
                    <div className="reviews-ratings">
                        <div className="ratings">
                            <input
                                className="review-stars"
                                type="radio"
                                id="star1"
                                name="rating"
                                value={this.state.rating}
                                onClick={() => this.handleRating(1.0)}
                            />
                            <label htmlFor="star1"></label>
                            <input
                                className="review-stars"
                                type="radio"
                                id="star2"
                                name="rating"
                                value={this.state.rating}
                                onClick={() => this.handleRating(2.0)}
                            />
                            <label htmlFor="star2"></label>
                            <input
                                className="review-stars"
                                type="radio"
                                id="star3"
                                name="rating"
                                value={this.state.rating}
                                onClick={() => this.handleRating(3.0)}
                            />
                            <label htmlFor="star3"></label>
                            <input
                                className="review-stars"
                                type="radio"
                                id="star4"
                                name="rating"
                                value={this.state.rating}
                                onClick={() => this.handleRating(4.0)}
                            />
                            <label htmlFor="star4"></label>
                            <input
                                className="review-stars"
                                type="radio"
                                id="star5"
                                name="rating"
                                value={this.state.rating}
                                onClick={() => this.handleRating(5.0)}
                            />
                            <label htmlFor="star5"></label>
                        </div>
                        <textarea
                            id="review-text"
                            className="review-no-body-error"
                            onChange={this.update("body")}
                            placeholder="Tell us about your stay"
                            value={this.state.body}
                        ></textarea>
                    </div>
                </div>
                {/* {errors} */}
                <div className="review-bottom">
                    <button
                        className="review-button"
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        Submit review
                    </button>
                </div>
            </form>
        );
    }
}

export default ReviewForm;
