export const fetchReviews = review => (
    $.ajax({
        method: 'get',
        url: '/api/review',
        data: { review }
    })
)

export const fetchReview = id => (
    $.ajax({
        method: 'get',
        url: `/api/reviews/${id}`
    })
)

export const createReview = review => (
    $.ajax({
        method: 'post',
        url: '/api/reviews',
        data: { review }
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        method: 'delete',
        url: `/api/reviews/${reviewId}`
    })
)

