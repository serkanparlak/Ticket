var url_ticket = 'https://5d405bbac516a90014e8991c.mockapi.io/api/tickets/';

// get Tickets
const getTickets = () => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_ticket, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get Tickets async
const getTicketsAsync = (callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_ticket, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// get a Ticket
const getTicket = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_ticket + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// get a Ticket async
const getTicketAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url_ticket + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

// add Ticket
const addTicket = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_ticket, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// add Ticket async 
const addTicketAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', url_ticket, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// update Ticket
const updateTicket = (data) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_ticket + data.id, false)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return JSON.parse(xhr.responseText);
}

// update Ticket async 
const updateTicketAsync = (data, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('PUT', url_ticket + data.id, true)
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send(JSON.stringify(data));
}

// delete Ticket
const deleteTicket = (id) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_ticket + id, false)
    xhr.send();
    return JSON.parse(xhr.responseText);
}

// delete Ticket async
const deleteTicketAsync = (id, callback) => {
    let xhr = new XMLHttpRequest;
    xhr.open('DELETE', url_ticket + id, true)
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText))
    }
    xhr.send();
}

/* how to use

var ticket_json = `{
    "id": "1",
    "ownerId": 5,
    "assigneeId": 3,
    "priority": "priority 1",
    "state": "state 1",
    "subject": "subject 1",
    "description": "description 1",
    "date": 1564559233
  }`

const ticket_obj = {
    id: 1,
    ownerId: 5,
    assigneeId: 3,
    priority: "priority 1",
    state: "state 1asd",
    description: "description 1asd",
    subject: "sub 1asd",
    date: 1564559237
};

console.log(getTickets());
getUserAsync(6, x => { console.log(x) });

/**/