var url_user = 'https://5d405bbac516a90014e8991c.mockapi.io/api/users/';

// get users
const getUsers = () => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_user, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get users async
const getUsersAsync = (callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_user, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// get a user
const getUser = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_user + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get a user async
const getUserAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_user + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// add user
const addUser = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_user, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// add user async 
const addUserAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_user, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// update user
const updateUser = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_user + data.id, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// update user async 
const updateUserAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_user + data.id, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// delete user
const deleteUser = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_user + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// delete user async
const deleteUserAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_user + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

/* how to use

const user_json = `{
        "id": "1",
        "username": "username 1",
        "password": "password 1"
      }`

const user_obj = {
        id: "1",
        username: "username 1",
        password: "password 1"
      }

console.log(getUser(6));
getUserAsync(6, x => { console.log(x) });

/**/
