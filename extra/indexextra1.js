// var names = window.prompt('What is your name?');
// window.alert('Welcome, '+ names);



var loggedIn = false;
while (!loggedIn) {
var username = prompt('Username:');
var password = prompt('Password:');

if (username == 'sammy123' && password == '12345') {
    alert('Welcome back, ' + username);
    loggedIn=true;
}
else{
    alert('Inaccurate Credentials!');
}
 }