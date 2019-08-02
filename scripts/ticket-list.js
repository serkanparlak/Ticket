var urls = [
    "../services/user_service.js",
    "../services/ticket_service.js"
    , "../services/comment_service.js"
];
function loadScript(urls, callback) {
    Notiflix.Loading.Standard('Loading...');
    urls.forEach((url, index) => {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = () => {
            if (urls.length - 1 == index) {
                setTimeout(() => {
                    callback()
                }, 0);
            }
        }
        document.head.appendChild(script);
    });
}

loadScript(urls, () => {
    getTicketsAsync((tickets) => {
        var tbody = document.getElementById('ticket_list_tbody');
        tickets.forEach((ticket, index) => {
            var tr = document.createElement('tr');
            // tr.setAttribute('t_id', ticket.id);
            tr.addEventListener('click', () => { ticketClick(ticket.id) });
            tr.setAttribute('style', 'cursor:pointer')
            // if (index % 2 == 0) {
            //     tr.setAttribute('class', 'table-active');
            // }
            var td = document.createElement('td');
            td.textContent = ticket.subject;
            tr.appendChild(td);
            var td2 = document.createElement('td');
            getUserAsync(ticket.ownerId, user => td2.textContent = user.username);
            tr.appendChild(td2);
            var td3 = document.createElement('td');
            td3.textContent = formatDate(ticket.date);
            tr.appendChild(td3);
            var td4 = document.createElement('td');
            getUserAsync(ticket.assigneeId, user => {
                td4.textContent = user.username;
                if (index + 1 == tickets.length) {
                    Notiflix.Loading.Remove();
                }
            });
            tr.appendChild(td4);
            var td5 = document.createElement('td');
            var priority_span = document.createElement('span');
            priority_span.textContent = ticket.priority;
            if(ticket.priority == 'Low'){
                priority_span.setAttribute('class','badge badge-pill badge-dark');
            }else if(ticket.priority == 'High'){
                priority_span.setAttribute('class','badge badge-pill badge-danger');
            }else{
                priority_span.setAttribute('class','badge badge-pill badge-info');
            }
            td5.appendChild(priority_span);
            tr.appendChild(td5);
            tbody.appendChild(tr);
        });
    })

});
function formatDate(dt) {
    date = new Date(dt)
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
}
ticketClick = (id) => {
    location.href = 'file:///home/sparlak/Projects/Angular/TicketDeneme/pages/login.html';
}

var navigate_list = document.getElementById('navigate-list');
navigate_list.addEventListener('click', function (e) {
    var activeLink = (navigate_list.getElementsByClassName('active'))[0];
    if (e.target !== activeLink) {
        if (activeLink) {
            var before_active_attr = activeLink.attributes['class'].value.slice(0, -6);
            activeLink.setAttribute('class', before_active_attr);
        }
        var after_active_attr = e.target.attributes['class'].value + ' active';
        e.target.setAttribute('class', after_active_attr);
        var header = document.getElementById('ticket_list_header');
        var childvalue = e.target.children[0].innerText;
        var newT = e.target.innerText.indexOf(childvalue);
        header.innerText = e.target.innerText.slice(0, newT);
    }
})

