export const createHome = (home) =>
    $.ajax({
        method: "post",
        url: "/api/homes",
        data: { home },
    });

export const updateHome = (home) =>
    $.ajax({
        method: "patch",
        url: `/api/homes/${home.id}`,
        data: { home },
    });

export const fetchHome = (homeId) =>
    $.ajax({
        method: "GET",
        url: `/api/homes/${homeId}`,
    });

export const fetchHomes = (searchParams) => {
    return $.ajax({
        method: "GET",
        url: "/api/homes",
        data: {searchParams}
    });
};

// export const searchHomes = (query) => {
//     return $.ajax({
//         method: "GET",
//         url: "/api/homes",
//         data: { query }
//     });
// };

export const createReview = (review) =>
    $.ajax({
        method: "POST",
        url: "api/reviews",
        data: { review },
    });

export const fetchReviews = (homeId) =>
    $.ajax({
        method: "GET",
        url: "/api/reviews",
        data: { homeId },
    });



