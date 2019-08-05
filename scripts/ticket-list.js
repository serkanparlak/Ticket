var allTickets;
var allUsers;
var allComments;
/**
 * ticket list tablosunu doldurur ve listeyi gösterir
 */
const ticketListLoad = (filterKey, sortBy) => {
    let tbody = document.getElementById('ticket_list_tbody');
    tbody.innerHTML = '';
    let mappaingData;
    switch (filterKey) {
        case "allUnsolved": {
            mappaingData = allTickets.filter(x => x.state == true)
            break;
        }
        case "recentlyUpdated": {
            let comments = [...new Set(allComments.map(comment => comment.ticketId))]
            console.log(comments)
            mappaingData = allTickets.filter(x => x.state == false)
            break;
        }
        case "newTickets": {
            mappaingData = allTickets.filter(x => x.state == true)
            break;
        }
        case "myTickets": {
            mappaingData = allTickets.filter(x => x.state == true)
            break;
        }
        case "assignedToMe": {
            mappaingData = allTickets.filter(x => x.state == true)
            break;
        }
        default: { mappaingData = allTickets; break; }
    }
    mappaingData.forEach((ticket, index) => {

        let tr = document.createElement('tr');
        // tr.setAttribute('t_id', ticket.id);
        tr.addEventListener('click', () => { ticketClick(ticket.id) });
        tr.setAttribute('style', 'cursor:pointer')

        let td = document.createElement('td');
        td.textContent = ticket.subject;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        // getUserAsync(ticket.ownerId, user => td2.textContent = user.username);
        td2.textContent = allUsers.find(x => x.id == ticket.ownerId).username;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.textContent = formatDate(ticket.date);
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.textContent = allUsers.find(x => x.id == ticket.assigneeId).username;
        tr.appendChild(td4);

        let td5 = document.createElement('td');

        let priority_span = document.createElement('span');
        priority_span.textContent = ticket.priority;

        if (ticket.priority == 'Low') {
            priority_span.setAttribute('class', 'badge badge-pill badge-dark');
        } else if (ticket.priority == 'High') {
            priority_span.setAttribute('class', 'badge badge-pill badge-danger');
        } else {
            priority_span.setAttribute('class', 'badge badge-pill badge-info');
        }

        td5.appendChild(priority_span);
        tr.appendChild(td5);
        tbody.appendChild(tr);
    });
}

/**
 * sayfa ilk yüklendiğindeki datayı doldurur
 */
getUsersAsync(users => {
    allUsers = users;
    getCommentsAsync(comments => {
        allComments = comments;
        allComments.sort((a, b) => (a.date < b.date) ? 1 : -1);
        getTicketsAsync(tickets => {
            allTickets = tickets;
            allTickets.sort((a, b) => (a.date < b.date) ? 1 : -1);
            ticketListLoad();
        });
    });
});

/**
 * tarihi formatlı yazdırır
 */
function formatDate(dt) {
    date = new Date(dt);
    let monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

/**
 * ticket listesindeki tickete tıklandığında detay sayfasına yönlendirir
 */
ticketClick = (id) => {
    location.href = 'file:///home/sparlak/Projects/Angular/TicketDeneme/pages/login.html';
}

/**
 * sol menüde tıklanan linki aktif eder ve listeyi istenen şekilde günceller
 */
var left_menu_list = document.getElementById('navigate-list');
left_menu_list.addEventListener('click', function (e) {
    let activeLink = (left_menu_list.getElementsByClassName('active'))[0];
    if (e.target !== activeLink) {
        if (activeLink) {
            let before_active_attr = activeLink.attributes['class'].value.slice(0, -6);
            activeLink.setAttribute('class', before_active_attr);
        }
        let after_active_attr = e.target.attributes['class'].value + ' active';
        e.target.setAttribute('class', after_active_attr);
        let header = document.getElementById('ticket_list_header');
        let childvalue = e.target.children[0].innerText;
        let index = e.target.innerText.indexOf(childvalue);
        header.innerText = e.target.innerText.slice(0, index);
        ticketListLoad(e.target.attributes['filter_key'].value)
    }
})

