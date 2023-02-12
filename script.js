const bar = document.getElementsById('bar');
const close = document.getElementsById('close');
const nav = document.getElementById('navbar');
const userData = [
    {username: "user1", password: "pass1"},
    {username: "user2", password: "pass2"},
    {username: "user3", password: "pass3"}
  ];
  
  function checkLogin(username, password) {
    for (let i = 0; i < userData.length; i++) {
      if (username === userData[i].username && password === userData[i].password) {
        return true;
      }
    }
    return false;
  }
  
  const username = prompt("Enter your username:");
  const password = prompt("Enter your password:");
  
  if (checkLogin(username, password)) {
    alert("Login successful!");
  } else {
    alert("Incorrect username or password.");
  }
  
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}