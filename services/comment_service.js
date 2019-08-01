var url_comment = 'https://5d405bbac516a90014e8991c.mockapi.io/api/comments/';

// get Comments
const getComments = () => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_comment, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get Comments async
const getCommentsAsync = (callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_comment, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// get a Comment
const getComment = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_comment + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get a Comment async
const getCommentAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_comment + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// add Comment
const addComment = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_comment, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// add Comment async 
const addCommentAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_comment, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// update Comment
const updateComment = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_comment + data.id, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// update Comment async 
const updateCommentAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_comment + data.id, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// delete Comment
const deleteComment = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_comment + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// delete Comment async
const deleteCommentAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_comment + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

/* how to use

var comment_json = `{
    "id": "1",
    "ownerId": 1,
    "ticketId": 1,
    "date": 1564559233,
    "content": "content 1",
    "isSolution": false
  }`

const comment_obj = {
    id: "1",
    ownerId: 1,
    ticketId: 1,
    date: 1564559233,
    content: "content 1",
    isSolution: false
  };

console.log(getComments());
getCommentAsync(6, x => { console.log(x) });

/**/