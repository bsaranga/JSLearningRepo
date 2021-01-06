// Create user

const create = async (user) => {
    try {
        let response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

// List users

async function list (signal) {
    try {
        let response = await fetch('/api/users', {
            method: 'GET',
            signal: signal,
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

// Read user

const read = async (params, credentials, signal) => {
    try {
        let response = await fetch(`/api/users/${params.userId}`, {
            method: 'GET',
            signal: 'signal',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credentials.t}`
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

// Updating User Data

const update = async (params, credentials, user) => {
    try {
        let response = await fetch(`api/users/${params.userId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credentials.t}`
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

// Remove User

const remove = async (params, credentials) => {
    try {
        let response = await fetch(`api/users/${params.userId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${credentials.t}`
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}

module.exports = {create, list, read, update, remove}