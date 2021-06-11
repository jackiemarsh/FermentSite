export const login = user => (
    $.ajax({
        method: 'POST',
        url: `api/session`,
        data: {user}
    })
)

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: `api/session`
    })
)

export const signup = user => (
    $.ajax({
        method: 'POST',
        url: `api/users`,
        data: user,
        contentType: false,
        processData: false
    })
)

export const fetchUser = (userId) => (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`
    })
  )

  export const fetchUsers = () => (
    $.ajax({
      method: 'GET',
      url: '/api/users'
    })
  )