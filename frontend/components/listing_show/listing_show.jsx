import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from "@material-ui/icons/Room";
import StarIcon from "@material-ui/icons/Star";
import mapboxgl from "mapbox-gl";
import CreateBookingContainer from "../booking_form/booking_form_container";
import ListingReviewItem from "./listing_review_item";
import Footer from "../footer/footer";
import ListingHeaderBar from "./listing_header_bar";
import ListingPhotos from "./listing_photos";

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
    this.listingMap;
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps) {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
    this.listingMap = new mapboxgl.Map({
      container: "listing-map-container", // container ID
      style: "mapbox://styles/mapbox/streets-v11", // style URL
      center: [this.props.listing.longitude, this.props.listing.latitude], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    const navigate = new mapboxgl.NavigationControl();
    this.listingMap.addControl(navigate, "bottom-right");

    new mapboxgl.Marker()
      .setLngLat([this.props.listing.longitude, this.props.listing.latitude])
      .addTo(this.listingMap);
  }

  handleDelete() {
    this.props.deleteListing(this.props.match.params.listingId);
    this.props.history.push("/");
  }

  render() {
    if (!this.props.listing) return null;
    if (!this.props.listing.host) return null;
    let deleteButton;
    let editButton;
    if (this.props.listing.host_id === this.props.session) {
      deleteButton = (
        <button
          className="delete-listing-button"
          onClick={() => this.handleDelete()}
        >
          Delete Listing
        </button>
      );
      editButton = <button 
      className="edit-listing-button"
      onClick={() => this.props.history.push(`/listing/${this.props.listing.id}/edit`)}
      >Edit Listing</button>;
    }
    let host = this.props.listing.host;
    let hostProfilePic;
    if (this.props.listing.hostPhoto) {
      hostProfilePic = this.props.listing.hostPhoto;
    } else {
      hostProfilePic = window.user_icon;
    }

    let ratingSum = 0.0;
    let listingReviews;
    if (this.props.listing.listing_reviews) {
      listingReviews = this.props.listing.listing_reviews.map((review, idx) => {
        ratingSum += review.rating;
        return (
          <div
            key={`${idx}${review.id}`}
            className="listing-review-item-container"
          >
            <ListingReviewItem review={review} />
          </div>
        );
      });
    }
    let numReviews = this.props.listing.listing_reviews.length;
    let reviewRating = (
      ratingSum / this.props.listing.listing_reviews.length
    ).toFixed(2);
    
    return (
      <>
        <div className="flex-container-listing-show">
          <div className="listing-show-container">
            <div className="listing-show">
              <div className="listing-title-container">
                <h4 className="listing-title">{this.props.listing.title}</h4>
              </div>
              <div className="reviews-address-beds-container">
                <ListingHeaderBar
                  city={this.props.listing.city}
                  state={this.props.listing.state}
                  reviewRating={reviewRating}
                  numReviews={numReviews}
                  numBeds={this.props.listing.num_beds}
                />
              </div>

              <div className="listing-photos-section">
                <ListingPhotos photos={this.props.listing.photos} />
              </div>

              <div className="host-info-booking-form-flex">
                <div className="host-info-booking-form-container">
                  <div className="host-info-listing-desc-container">
                    <Link
                      to={`/users/show/${host.id}`}
                      className="host-pic-plus-meet-host"
                    >
                      <div className="meet-host-container">
                        <h3 className="host-info-h3">
                          Meet your Host, {host.first_name} {host.last_name}
                        </h3>

                        <p className="host-info-created-at">
                          Hosting since {host.created_at.slice(0, 4)}
                        </p>
                      </div>
                      <div className="host-pic-container">
                        <img
                          className="host-pic"
                          src={hostProfilePic}
                          alt="Profile pic"
                        />
                      </div>
                    </Link>

                    <div className="listing-description-container">
                      <h3 className="description-h3">
                        All about {host.first_name}'s place
                      </h3>

                      <p className="listing-description">
                        {this.props.listing.description}
                      </p>
                    </div>
                  </div>
                  <div className="booking-form-container">
                    <div className="booking-form-top">
                      <div className="booking-price-container">
                        <li className="booking-price">
                          ${this.props.listing.price}
                        </li>
                        <li className="night">/night</li>
                      </div>
                      <div className="booking-form-reviews-container">
                        <StarIcon
                          className="booking-form-star-icon"
                          style={{ fontSize: 18 }}
                        />{" "}
                        <div className="booking-form-reviews">
                          {reviewRating === "NaN" ? (
                            ""
                          ) : (
                            <span className="booking-form-reviews-rating">
                              {reviewRating}
                            </span>
                          )}
                          <span className="booking-form-reviews-num-reviews">
                            ({numReviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <CreateBookingContainer
                      bookedDates={this.props.listing.bookings}
                    />
                  </div>
                </div>
              </div>

              <div className="reviews-section-container">
                <div className="listing-reviews-header-container">
                  <StarIcon
                    className="listing-reviews-header-star-icon"
                    style={{ fontSize: 20 }}
                  />
                  <h4 className="listing-reviews-rating-h4">
                    {reviewRating === "NaN" ? "" : <span>{reviewRating}</span>}
                    {reviewRating === "NaN" ? (
                      ""
                    ) : (
                      <span className="reviews-rating-num-separator">·</span>
                    )}
                    <span>{numReviews}</span>
                    <span>reviews</span>
                  </h4>
                </div>

                {reviewRating === "NaN" ? (
                  ""
                ) : (
                  <div className="individual-ratings-grid">
                  </div>
                )}

                <div className="listing-reviews-container">
                  {listingReviews}
                </div>
              </div>

              <div id="listing-map-container"></div>
              <div className="edit-listing-button-container">{editButton}</div>
              <div className="delete-listing-button-container">
                {deleteButton}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default ListingShow;
