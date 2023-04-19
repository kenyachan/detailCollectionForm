export function addValidation(form) {
	let inputElements = form.querySelectorAll('input');

	inputElements.forEach(inputElement => {
		switch (inputElement.type) {
			case 'email':
				addEmailValidation(inputElement);
				break;
			case 'text':
				if (inputElement.id === 'postCodeInput') {
					addPostCodeValidation(inputElement);
				}
				break;
			case 'password':
				if (inputElement.id === 'password') {
					addPasswordValidation(inputElement);
				} else if (inputElement.id === 'passwordConfirmation') {
					addPasswordConfirmationValidation(inputElement);
				}
				break;
			default:
				//do nothing;
		}
	});

	let selectElements = form.querySelectorAll('select');

	selectElements.forEach(selectElement => {
		addSelectValidation(selectElement);
	});
}

function addSelectValidation(selectElement) {
	selectElement.setCustomValidity('Please choose a country.');

	selectElement.addEventListener('change', event => {
		if (selectElement.validity.typeMismatch || selectElement.value === '') {
			selectElement.setCustomValidity('Please choose a country.');
		} else {
			selectElement.setCustomValidity('');
		}
	});
}

function addEmailValidation(inputElement) {
	inputElement.setCustomValidity('Please enter you email address.');

	inputElement.addEventListener('focusout', event => {
		if (inputElement.validity.valueMissing) {
			inputElement.setCustomValidity('Email address cannot be blank.');
		} else if (inputElement.validity.typeMismatch) {
			inputElement.setCustomValidity('Please enter an email address.');
		} else {
			inputElement.setCustomValidity('');
		}
	});
}

function addPostCodeValidation(inputElement) {
	inputElement.setCustomValidity('Please enter a post code.');

	inputElement.addEventListener('input', event => {
		if (inputElement.validity.valueMissing) {
			inputElement.setCustomValidity('Post code cannot be blank.');
		} else if (inputElement.validity.patternMismatch) {
			inputElement.setCustomValidity('Please enter a valid post code.');
		} else {
			inputElement.setCustomValidity('');
		}
	});
}

function addPasswordValidation(inputElement) {
	inputElement.setCustomValidity('Please enter new password.');

	inputElement.addEventListener('input', event => {
		if (inputElement.validity.valueMissing) {
			inputElement.setCustomValidity('Password cannot be blank.');
		} else {
			inputElement.setCustomValidity('');
		}
	});
}

function addPasswordConfirmationValidation(inputElement) {
	const passwordInput = document.querySelector('#password');

	inputElement.addEventListener('input', event => {
		if (inputElement.value !== passwordInput.value) {
			inputElement.setCustomValidity('Password confirmation does not match.');
		} else {
			inputElement.setCustomValidity('');
		}
	});
}
