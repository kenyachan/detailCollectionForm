export const createHeader = () => {
	const element = document.createElement('header');

	const page = document.createElement('div');
	page.classList.add('page');
	element.appendChild(page);

	const pageTitle = document.createElement('p');
	pageTitle.classList.add('title');
	pageTitle.textContent = 'Form Validation Practice';
	page.appendChild(pageTitle);

	return element;
}

export const createMain = () => {
	const mainElement = document.createElement('main');

	const page = document.createElement('div');
	page.classList.add('page');
	mainElement.appendChild(page);

	return mainElement;
}

export const createFooter = () => {
	const element = document.createElement('footer');

	const page = document.createElement('div');
	page.classList.add('page');
	element.appendChild(page);

	const authorWidget = document.createElement('div');
	authorWidget.classList.add('author-widget');
	page.appendChild(authorWidget);

	const authorTextElement = document.createElement('p');
	authorTextElement.textContent = 'Created by ';
	authorWidget.appendChild(authorTextElement);

	const authorLink = document.createElement('a');
	const link = 'https://github.com/kenyachan';
	const author = 'Kenya Chan';
	authorLink.setAttribute('href', link);
	authorLink.setAttribute('target', '_blank');
	authorLink.setAttribute('rel', 'noopener noreferrer');
	authorLink.textContent = author;
	authorTextElement.appendChild(authorLink);

	return element;
}

export const createDetailCollectionForm = () => {
	const countryList = ['Australia', 'China', 'Indonesia', 'Japan', 'Korea', 'United States'];

	const form = document.createElement('form');

	const title = document.createElement('p');
	title.textContent = 'Details';
	title.classList.add('form-title');
	form.appendChild(title);

	form.appendChild(createEmailInput());
	
	const addressDetails = document.createElement('div');
	addressDetails.classList.add('address');
	addressDetails.appendChild(createCountryInput(countryList));
	addressDetails.appendChild(createPostCodeInput());
	form.appendChild(addressDetails);

	form.appendChild(createPasswordInput());
	form.appendChild(createPasswordConfirmationInput());

	form.appendChild(createSubmitButton());

	return form;
}

function createEmailInput() {
	const element = document.createElement('div');

	const label = document.createElement('label');
	label.setAttribute('for', 'emailInput');
	label.textContent = 'Email:';
	element.appendChild(label);

	const input = document.createElement('input');
	input.setAttribute('type', 'email');
	input.setAttribute('name', 'email');
	input.setAttribute('title', 'Please enter your email address');
	input.setAttribute('placeholder', 'your.email@mail.com');
	input.id = 'email';
	input.required = true;
	element.appendChild(input);

	return element;
}

function createCountryInput(countryList) {
	const element = document.createElement('div');

	const label = document.createElement('lable');
	label.setAttribute('for', 'countryInput');
	label.textContent = 'Country:';
	element.appendChild(label);

	const select = document.createElement('select');
	select.setAttribute('name', 'countryInput');
	select.setAttribute('title', 'Please select a country');
	select.id = 'countryInput';
	select.required = true;
	element.appendChild(select);

	const defaultOption = document.createElement('option');
	defaultOption.value = '';
	defaultOption.textContent = 'Select a country';
	defaultOption.selected = true;
	select.appendChild(defaultOption);

	countryList.forEach(country => {
		const option = document.createElement('option');
		option.value = country.toLowerCase();
		option.textContent = country;

		select.appendChild(option);
	});

	return element;
}

function createPostCodeInput() {
	const element = document.createElement('div');

	const label = document.createElement('label');
	label.setAttribute('for', 'postCodeInput');
	label.textContent = 'Post/Zip Code:';
	element.appendChild(label);

	const input = document.createElement('input');
	input.setAttribute('type', 'text');
	input.setAttribute('minlength', '4');
	input.setAttribute('maxlength', '5');
	input.setAttribute('pattern', '\\d{4,5}');
	input.setAttribute('title', 'Please enter your post code');
	input.setAttribute('placeholder', '2000');
	input.id = 'postCodeInput';
	input.required = true;
	element.appendChild(input);

	return element;
}

function createPasswordInput() {
	const element = document.createElement('div');

	const label = document.createElement('label');
	label.setAttribute('for', 'passwordInput');
	label.textContent = 'Password:';
	element.appendChild(label);

	const input = document.createElement('input');
	input.setAttribute('type', 'password');
	input.setAttribute('name', 'password');
	input.setAttribute('title', 'Please enter a new password');
	input.id = 'password';
	input.required = true;
	element.appendChild(input);

	return element;
}

function createPasswordConfirmationInput() {
	const element = document.createElement('div');

	const label = document.createElement('label');
	label.setAttribute('for', 'passwordConfirmation');
	label.textContent = 'Confirm password:';
	element.appendChild(label);

	const input = document.createElement('input');
	input.setAttribute('type', 'password');
	input.setAttribute('name', 'passwordConfirmation');
	input.setAttribute('title', 'Please confirm your password');
	input.id = 'passwordConfirmation';
	input.required = true;
	element.appendChild(input);

	return element;
}

function createSubmitButton() {
	const button = document.createElement('button');
	button.setAttribute('type', 'submit');
	button.textContent = 'Submit';

	return button;
}
