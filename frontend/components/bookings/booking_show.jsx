import React from "react";
import mapboxgl from "!mapbox-gl";
import { Link } from "react-router-dom";

class BookingShow extends React.Component {
    constructor(props) {
        super(props);
        this.bookingMap;
        this.state = { homeId: null };
    }

    componentDidMount() {
        this.props.fetchBooking(this.props.match.params.bookingId);
    }

    componentDidUpdate() {
        mapboxgl.accessToken =
            "pk.eyJ1IjoieXVkYWduIiwiYSI6ImNrdGRkcWJpazJmM2gybnBnZXE3dzQzcmgifQ.W_-afZ__2dCOr7xvF3QYBA";
        this.bookingMap = new mapboxgl.Map({
            container: "booking-map-container", // container ID
            style: "mapbox://styles/mapbox/streets-v11", // style URL
            center: [
                this.props.booking.home.longitude,
                this.props.booking.home.latitude,
            ], // starting position [lng, lat]
            zoom: 15, // starting zoom
        });

        const navigate = new mapboxgl.NavigationControl();
        this.bookingMap.addControl(navigate, "bottom-right");

        new mapboxgl.Marker()
            .setLngLat([
                this.props.booking.home.longitude,
                this.props.booking.home.latitude,
            ])
            .addTo(this.bookingMap);
    }

    cancelBooking() {
        this.props
            .deleteBooking(this.props.match.params.bookingId)
            .then(this.props.history.push("/"));
    }

    render() {
        if (!this.props.booking) return null;
        if (!this.props.booking.guest) return null;
        let booking = this.props.booking;
        let home = booking.home;
        let options = (options = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
        });
        let checkInDate = new Date(booking.check_in).toLocaleDateString(
            "en-US",
            options
        );
        let checkOutDate = new Date(booking.check_out).toLocaleDateString(
            "en-US",
            options
        );
        let today = new Date();
        let cancelButtonDiv;
        if (new Date(booking.check_in) >= today) {
            cancelButtonDiv = (
                <div className="cancel-booking-container">
                    <button
                        className="cancel-booking-button"
                        onClick={() => this.cancelBooking()}
                    >
                        Cancel Reservation
                    </button>
                </div>
            );
        } else {
            cancelButtonDiv = <div></div>;
        }

        let createReviewButton;
        if (
            booking.guest_id === this.props.session &&
            new Date(booking.check_out) < today
        ) {
            createReviewButton = (
                <li
                    className="create-review-li"
                    onClick={() => this.props.openModal("create review")}
                >
                    Leave Review
                </li>
            );
        } else {
            createReviewButton = (
                <div className='review-not-available-container'>
                    <h3 className='review-not-available-h3'>Review form will become available after your trip has ended</h3>
                </div>
            );
        }
        return (
            <div className="booking-show-container-container">
                <div className="booking-show-map-container">
                    <div className="booking-show-container">
                        <div className="home-res-header-container">
                            <h6 className="home-res-header">Your home reservation</h6>
                        </div>
                        <div className="your-stay-at-host-container">
                            <h3 className="your-stay-at-host">
                                Your stay at {booking.host.fname}'s place
                            </h3>
                        </div>
                        <div className="booking-home-image-container">
                            <img
                                className="booking-home-image"
                                src={booking.photos[0]}
                                alt="Booking Photo"
                            />
                        </div>
                        <div className="booking-home-title-container">
                            <h3 className="booking-home-title">{home.title}</h3>
                        </div>
                        <div className="check-in-check-out-container">
                            <div className="check-in-container">
                                <h5 className="check-in">Check In</h5>
                                <p className="check-in-date">{checkInDate}</p>
                            </div>
                            <div className="border-div"></div>
                            <div className="check-out-container">
                                <h5 className="check-out">Check Out</h5>
                                <p className="check-out-date">{checkOutDate}</p>
                            </div>
                        </div>

                        <div className="booking-details-container">
                            <div className="booking-details-h3-container">
                                <h3 className="booking-details-h3">Reservation Details</h3>
                            </div>
                            <div className="whos-coming-container">
                                <h4 className="whos-coming-h4">Who's coming</h4>
                                <p className="booking-details-guest-num">
                                    {booking.num_guests} guests
                                </p>
                            </div>

                            <div className="getting-there-container">
                                <div className="getting-there-h3-container">
                                    <h3 className="getting-there-h3">Getting there</h3>
                                </div>
                                <div className="address-container">
                                    <div className="address-h5-container">
                                        <h5 className="address-h5">Address</h5>
                                    </div>
                                    <p className="booking-home-address">{home.address}</p>
                                    <p className="booking-home-state-city-zip">
                                        {home.city}, {home.state}, {home.zip_code}
                                    </p>
                                </div>
                            </div>

                            <div className="host-container">
                                <h3 className="host-display-h3">
                                    Your host, {booking.host.fname}
                                </h3>
                                <Link
                                    className="host-link"
                                    to={`/users/show/${booking.host.id}`}
                                >
                                    Show profile
                                </Link>
                            </div>

                            <div className="payment-info-container">
                                <div className="payment-info-h3-container">
                                    <h3 className="payment-info-h3">Payment Info</h3>
                                </div>
                                <div className="total-cost-display-container">
                                    <h5 className="total-cost-display-h5">Total cost</h5>
                                    <p className="total-cost-display">${booking.price}</p>
                                </div>
                            </div>
                            {cancelButtonDiv}
                            {createReviewButton}
                        </div>
                    </div>

                    <div id="booking-map-container"></div>
                </div>
            </div>
        );
    }
}

export default BookingShow;
