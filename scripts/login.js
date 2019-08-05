


//var btn = document.getElementById('loginBtn')
//btn.onclick = login(inputUsername, inputPassword)

function loginButtonPressed()
{
    var inputUsername = document.getElementById('inputUsername')
    var inputPassword = document.getElementById('inputPassword')
    if(inputUsername.value == '' || inputPassword.value == '')
    {
        alert("Please fill username and password area")
    }else login(inputUsername.value.trim(),inputPassword.value)
}


 function login(uname,pword){
    var data = getUserByUsername(uname)
    
    for(user of data) {
        
        if(user.username == uname && user.password == pword){
            
            console.log('successfull login ' + user.username)
            
            //for session storage
            //var storageData = [{'id':user.id, 'username': user.username}]
            var storageData = [user.id,user.username]
            sessionStorage.setItem('dataStored',storageData)
            location.href = '../pages/ticket-list.html'
            return user.username
        }
    }
    alert('Your username or password are incorrect...')
     
    
 }
 






