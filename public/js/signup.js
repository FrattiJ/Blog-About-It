const signup = async function(event) {
    event.preventDefault();
  
    const userData = {
      username: document.querySelector('#username-signup').value,
      password: document.querySelector('#password-signup').value,
    };
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/dash');
    } else {
      alert('Signup failed, please try again.');
    }
  };
  
  document.querySelector('#signupForm').addEventListener('submit', signup);
  