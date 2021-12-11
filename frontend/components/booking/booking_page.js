import React from 'react';
import { Link } from 'react-router-dom'

class BookingPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    componentDidMount(){
        this.setState({loading: false})
        this.props.fetchHomes()
    }

    // compononetDidUpdate(){
    //     this.props.fetchbookings()
    // }

    render(){ 
        if(this.state.loading) return null
        let photos = []
        return(
            <div>
                <div className='booking-header'>
                    <p>Welcome to your bookings</p>
                </div>
                <div className='booking-whole'>
                    <div className='bookings'>
                        {
                            this.props.bookings.map((booking, i) => (
                                <div key={`booking-${i}`} className='booking-container'>
                                    <img className='booking-img' src={this.props.homes[booking.home_id] ? this.props.homes[booking.home_id].photos[0] : ''}></img>
                                    <div className='booking-wrapper'>
                                        <h1>{booking.title}</h1>
                                        <h2>booking dates: {booking.check_in.split('T')[0]} to {booking.check_out_date.split('T')[0]}</h2>
                                        <p>Number of Guests: {booking.num_guests}</p>
                                    </div>
                                    <div className='cancel-booking-container'>
                                        <button onClick={() => this.props.history.push(`homes/${booking.home_id}`)} className='back-to-link'>Go to home</button> 
                                        <button onClick={() => this.props.deleteBooking(booking.id)} className='cancel-booking'>Cancel booking</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default BookingPage;