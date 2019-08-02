


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
    var data = getUsers()
    
    data.forEach(user => {
        
        if(user.username == uname && user.password == pword){
            
            console.log('successfull login ' + user.username)
            debugger
            return false
            
        }
    })
    alert('Your username or password are incorrect...')
     
 }
 






