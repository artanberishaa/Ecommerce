const bar = document.getElementsById('bar');
const close = document.getElementsById('close');
const nav = document.getElementById('navbar');

function getCredentials() {
  const user = {
    email: document.querySelector('[name="email"]').value,
    password: document.querySelector('[name="password"]').value
  };

  return user;
}

// Log in either using the given email/password or the token from storage
function login(credentials) {
  const payload = credentials ?
    Object.assign({ strategy: 'local' }, credentials) : {};

  return client.authenticate(payload)
    .then(showChat)
    .catch(showLogin);
}

document.addEventListener('click', function(ev) {
  switch(ev.target.id) {
    case 'signup': {
      const user = getCredentials();

      // For signup, create a new user and then log them in
      client.service('users').create(user)
        .then(() => login(user));

      break;
    }
    case 'login': {
      const user = getCredentials();

      login(user);

      break;
    }
    case 'logout': {
      client.logout().then(() => {
         document.getElementById('app').innerHTML = loginHTML;
      });

      break;
    }
  }
});

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