export const fetchBookings = userId => (
    $.ajax({
        method: 'get',
        url: `/api/bookings/${userId}`
    })
)

export const fetchBooking = id => (
    $.ajax({
        method: 'get',
        url: `/api/bookings/${id}`,
    })
)

export const createBooking = booking => (
    $.ajax({
        method: 'post',
        url: '/api/bookings',
        data: {booking}
    })
)

export const deleteBooking = bookingId => (
    $.ajax({
        method: 'delete',
        url: `/api/bookings/${bookingId}`,
    })
)