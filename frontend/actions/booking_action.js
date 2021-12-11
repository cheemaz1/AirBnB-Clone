import * as APIUtil from '../util/booking_util'

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS'
export const RECEIVE_BOOKING = 'RECEIVE_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'

export const receiveBookings = bookings => ({
    type: RECEIVE_BOOKINGS,
    bookings
})

export const receiveBooking = booking => ({
    type: RECEIVE_BOOKING,
    booking
})

export const removeBooking = bookingId => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const fetchBookings = () => dispatch => (
    APIUtil.fetchBookings().then(bookings => (
        dispatch(receiveBookings(bookings))
    ))
)

export const fetchBooking = id => dispatch => (
    APIUtil.fetchBooking(id).then(id => (
        dispatch(receiveBooking(id))
    ))
)

export const createBooking = formData => dispatch => (
    APIUtil.createBooking(formData).then(bookings => (
        dispatch(receiveBooking(bookings))
    ))
)

export const deleteBooking = bookingId => dispatch => (
    APIUtil.deleteBooking(bookingId).then(bookingId => (
        dispatch(removeBooking(bookingId))
    ))
)