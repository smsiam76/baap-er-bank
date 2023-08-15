// step 1

document.getElementById('btn-submit').addEventListener('click', function(){
	// step 2 add email
	const emailField = document.getElementById('user-email');
	const email = emailField.value;
	const passwordField = document.getElementById('user-password');
	const password = passwordField.value;
	// console.log(email, password)

	// step 3

	if(email === 'bank@gmail.com' && password === '2200'){
		window.location.href = 'bank.html';
	}
	else{
		alert('please enter correct email and password or you can type: email: bank@gmail.com and password: 2200 ')
	}

})