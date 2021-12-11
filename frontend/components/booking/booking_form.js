import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
    constructor(props) {
        super(props);

        this.newState = Object.assign({}, this.props.booking)
        this.state = this.props.booking
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleDate(field) {
        return (e) => {
            let date = new Date(e.target.value)   
            let utc = date.getTime() + (date.getTimezoneOffset() * 60000)
            this.setState({
                [field]: new Date(utc + (3600000 * 10))
            });
        };
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.currentUser){
            if (this.state.check_out < this.state.check_in) return null
            const bookings = Object.assign({}, this.state, {home_id: this.props.homeId})
            this.props.createBooking(bookings).then(this.props.history.push('/bookings')) 
            this.setState(this.newState)
        } else {
            this.props.openModal('login')
        }
    }

    handleInput(field){
        return (e) => {
        this.setState({
            [field]: e.target.value,
            }); 
        };
    }
    
    render(){
        let days = 0;
        const { check_in, check_out} = this.state;
        if(check_in && check_out) {
            let diff_time = check_out.getTime() - check_in.getTime();
            days = diff_time / (1000 * 3600 * 24);
        }

        return (
            <div className='booking-container'>
                <div className='price-container'>
                    <p className='booking-price'>${this.props.home.price} / night</p>
                </div>
                <form onSubmit={this.handleSubmit} className='booking-wrapper'>
                    <div className='date-wrapper'>
                        <input type='date'
                            onChange={this.handleDate('check_in')} 
                            className='date-button1'
                            min={new Date().toISOString().split('T')[0]}
                        />
                        <input type='date'
                            onChange={this.handleDate('check_out_date')} 
                            className='date-button'
                            min={new Date().toISOString().split('T')[0]}
                        />
                    </div> 
                    <select className='guest-button' onChange={this.handleInput('num_guests')}>
                        <option value="1" defaultValue>1 guest</option>
                        <option value="2">2 guest</option>
                        <option value="3">3 guest</option>
                        <option value="4">4 guest</option>
                        <option value="5">5 guest</option>
                        <option value="6">6 guest</option>
                        <option value="7">7 guest</option>
                    </select>

                        <div className='total'>
                            Total: ${this.props.home.price * days}
                        </div>

                    <button type='submit' className='check-ava'>Book</button>
                </form>
            </div>
        )
    }
    
}

export default withRouter(BookingForm)

