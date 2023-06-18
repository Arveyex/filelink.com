window.onload = function() {
  var loginContainer = document.getElementById('loginContainer');
  var signupContainer = document.getElementById('signupContainer');
  var fileSharingContainer = document.getElementById('fileSharingContainer');
  var loginForm = document.getElementById('loginForm');
  var signupForm = document.getElementById('signupForm');
  var logoutButton = document.getElementById('logoutButton');
  var uploadForm = document.getElementById('uploadForm');
  var fileInput = document.getElementById('fileInput');
  var filesList = document.getElementById('files');
  var signupButton = document.getElementById('signupButton');

  // Check if the user is already logged in
  var isLoggedIn = false; // Set this to true if the user is logged in
  var currentUser = null;

  if (isLoggedIn) {
    showFileSharing();
  } else {
    showLogin();
  }

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Perform login verification (replace with your authentication logic)
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    // Replace the if condition with your actual login verification logic
    if (currentUser && username === currentUser.username && password === currentUser.password) {
      showFileSharing();
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });

  signupButton.addEventListener('click', function() {
    showSignup();
  });

  signupForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get the sign-up form inputs
    var signupUsername = document.getElementById('signupUsernameInput').value;
    var signupPassword = document.getElementById('signupPasswordInput').value;

    // Replace this with your actual sign-up code
    var newUser = {
      username: signupUsername,
      password: signupPassword
    };

    // Assign the newly signed up user as the current user
    currentUser = newUser;

    alert('Sign up successful! You can now log in.');
    showLogin();
  });

  logoutButton.addEventListener('click', function() {
    currentUser = null;
    showLogin();
  });

  uploadForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    var file = fileInput.files[0];
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.innerHTML = file.name;
    link.setAttribute('target', '_blank');
    listItem.appendChild(link);
    filesList.appendChild(listItem);
  });

  function showLogin() {
    loginContainer.style.display = 'block';
    signupContainer.style.display = 'none';
    fileSharingContainer.style.display = 'none';
  }

  function showSignup() {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
    fileSharingContainer.style.display = 'none';
  }

  function showFileSharing() {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'none';
    fileSharingContainer.style.display = 'block';
  }
};
