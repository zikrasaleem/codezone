/*NAVIGATION BAR */
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0'; // Show sidebar
    } else {
        sidebar.style.left = '-250px'; // Hide sidebar
    }
}
/*END OF NAVIGATION BAR*/

/*SIGN UP*/
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login form submitted!');
});

document.getElementById('signupForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Signup form submitted!');
});

document.getElementById('forgotForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Password reset link sent!');
});
/*END OF SIGN UP*/


/*REGISTER*/

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    const mobile = document.getElementById('mobile').value;
    const dob = document.getElementById('dob').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const messageElement = document.getElementById('message');

    if (password !== confirmPassword) {
        messageElement.textContent = "Passwords do not match.";
    } else {
        messageElement.textContent = "Registration successful!";
        messageElement.style.color = "#8000ff";
       }
});
/*END OF REGISTER*/


/*upload*/

document.getElementById('closeForm').addEventListener('click', function() {
    document.getElementById('formContainer').classList.add('hidden');
});

document.getElementById('projectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Project submitted successfully!');
});
/*END OF UPLOAD*/


  


