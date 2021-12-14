import React from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

class CreateBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.booking;
    this.alreadyBooked = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlreadyBooked();
    this.errors = {};
  }

  componentDidUpdate() {
    if (this.props.currentUserId && !this.state.guest_id) {
      let booking = { ...this.state };
      booking.guest_id = this.props.currentUserId;
      this.setState(booking);
    }
  }

  setAlreadyBooked() {
    let that = this;
    this.props.bookedDates.forEach(dateSet => {
      let first = new Date(dateSet[0]);
      let last = new Date(dateSet[1]);
      const diff = (last - first) / (1000 * 3600 * 24);
      for (let i = 0; i < diff - 1; i++) {
        let temp = `${first.getFullYear()}/${first.getMonth() + 1}/${
          first.getDate() + 1
        }`;
        that.alreadyBooked.push(first);
        first = new Date(temp);
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let begin;
    let end;
    if (this.props.currentUserId) {
      if (this.state.check_in_date && this.state.check_out_date) {
        begin = `${this.state.check_in_date.getMonth()}/${this.state.check_in_date.getDate()}/${this.state.check_in_date.getFullYear()}`;
        end = `${this.state.check_out_date.getMonth()}/${this.state.check_out_date.getDate()}/${this.state.check_out_date.getFullYear()}`;
      }
      if (
        this.state.number_of_guest === "" ||
        this.state.check_in_date === "" ||
        this.state.check_out_date === ""
      ) {
        this.errors[0] = (
          <p className="booking-form-errors">
            Please fill out all the required fields
          </p>
        );
        this.setState(this.state);
      } else if (begin === end) {
        this.errors[1] = (
          <p className="booking-form-errors">Please choose at least two days</p>
        );
        this.setState(this.state);
      } else {
        this.props
          .createBooking(this.state)
          .then(res =>
            this.props.history.push(
              `/listing/${res.booking.listing_id}/booking/${res.booking.id}`
            )
          );
        this.errors = {};
      }
    } else {
      this.props.openModal();
    }
  }

  setTotalCost() {
    let days =
      (this.state.check_out_date.getTime() - this.state.check_in_date.getTime()) /
      (1000 * 3600 * 24);
    this.setState({ price: (days * this.props.listingPrice).toFixed(2) });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleDates(e) {
    let { startDate, endDate } = e.selection;
    this.setState({ check_in_date: startDate, check_out_date: endDate }, () =>
      this.setTotalCost()
    );
  }

  render() {
    let selectionRange;
    if (this.state.check_in_date === "") {
      selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.check_in_date !== "" && this.state.check_out_date === "") {
      selectionRange = {
        startDate: this.state.check_in_date,
        endDate: new Date(),
        key: "selection",
      };
    } else if (this.state.check_out_date !== "") {
      selectionRange = {
        startDate: this.state.check_in_date,
        endDate: this.state.check_out_date,
        key: "selection",
      };
    }

    let numGuestInput;
    if (this.state.check_in_date === "" || this.state.check_out_date === "") {
      numGuestInput = "";
    } else {
      numGuestInput = (
        <input
          className="num-of-guests"
          type="number"
          min="1"
          placeholder="Number of Guests"
          value={this.state.number_of_guest}
          onChange={this.handleChange("number_of_guest")}
        />
      );
    }
    return (
      <div className="booking-form-container">
        <form onSubmit={this.handleSubmit}>
          <div className="calander-container">
            <DateRange
              className="calendar"
              ranges={[selectionRange]}
              onChange={e => this.handleDates(e)}
              editableDateInputs={true}
              showSelectionPreview={true}
              months={1}
              direction="vertical"
              showDateDisplay={false}
              showMonthAndYearPickers={true}
              minDate={new Date()}
              disabledDates={this.alreadyBooked}
              rangeColors={["rgba(214, 30, 76, 0.945)"]}
            />
          </div>
          <div className="num-guests-container">{numGuestInput}</div>
          <div className="book-listing-button-container">
            <button className="book-listing-button">Reserve</button>
            {this.errors[0]}
            {this.errors[1]}
            <div className="total-cost-container">
              <div className="total-cost">
                <span className="total-cost-text">Total</span>
                <span className="total-cost-price">
                  {this.state.price !== "" ? `$${this.state.price}` : "$0"}
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBooking;
