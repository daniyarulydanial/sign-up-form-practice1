const form = document.getElementById('form')
const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit', e=> {

	e.preventDefault();

	var firstName = fname.value.trim();
	var lastName = lname.value.trim();
	var emailVal = email.value.trim();
	var passwordVal = password.value.trim();
	var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var s_fname = document.getElementById('s-fname');
	var s_lname = document.getElementById('s-lname');
	var s_email = document.getElementById('s-email');
	var s_password = document.getElementById('s-password');

	if (firstName === ''){
		fname.classList.add('error');
		s_fname.innerHTML = "First Name cannot be empty";
		s_fname.classList.add('error-text');
	}
	else {
		fname.classList.remove('error');
		s_fname.classList.remove('error-text');
		fname.classList.add('success');
	}

	if (lastName === ''){
		lname.classList.add('error');
		s_lname.innerHTML = "Last Name cannot be empty";
		s_lname.classList.add('error-text');
	}
	else {
		lname.classList.remove('error');
		s_lname.classList.remove('error-text');
		lname.classList.add('success');
	}

	if (emailVal === ''){
		email.classList.add('error');
		s_email.innerHTML = "Email cannot be empty";
		s_email.classList.add('error-text');
	}
	else if (!emailVal.match(pattern)){
		email.style.color = "hsl(0, 100%, 74%)";
		s_email.innerHTML = "Looks like not an email";
	}
	else {
		email.classList.remove('error');
		s_email.classList.remove('error-text');
		email.classList.add('success');
		email.style.color = "hsl(154, 59%, 51%)";
	}

	if (passwordVal === ''){
		password.classList.add('error');
		s_password.innerHTML = "Password cannot be empty";
		s_password.classList.add('error-text');
	}
	else {
		password.classList.remove('error');
		s_password.classList.remove('error-text');
		password.classList.add('success');
	}
})