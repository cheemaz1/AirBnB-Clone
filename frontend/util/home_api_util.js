export const fetchHomes = location => {
    // debugger
    return $.ajax ({
        method: 'get',
        url: '/api/homes',
        data: {location}
    })
}

export const fetchHome = id => (
    $.ajax({
        method: 'get',
        url: `/api/homes/${id}`
    })
)

export const createHome = home => {
    return $.ajax({
        method: 'post',
        url: '/api/homes',
        data: home,
        contentType: false,
        processData: false
    })
}

export const updateHome = (formData, homeId) => (
    $.ajax({
        method: 'patch',
        url: `/api/homes/${homeId}`,
        data: formData,
        contentType: false,
        processData: false
    })
)

export const deleteHome = homeId => (
    $.ajax({
        method: 'delete',
        url: `/api/homes/${homeId}`
    })
)

export const uploadPhoto = photo => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
)

