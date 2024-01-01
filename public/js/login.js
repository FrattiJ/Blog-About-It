const login = async function(event) {
    event.preventDefault();
  
    const userData = {
      username: document.querySelector('#username-login').value,
      password: document.querySelector('#password-login').value,
    };
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Login failed, please try again.');
    }
  };
  
  document.querySelector('#loginForm').addEventListener('submit', login);
  