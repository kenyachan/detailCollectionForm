export const createHeader = () => {
	const headerElement = document.createElement('header');

	return headerElement;
}

export const createMain = () => {
	const mainElement = document.createElement('main');

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
	form.appendChild(createCountryInput(countryList));
	form.appendChild(createPostCodeInput());
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
	input.id = 'email';
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
	select.id = 'countryInput';
	element.appendChild(select);

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
	input.id = 'postCodeInput';
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
	input.id = 'password';
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
	input.id = 'passwordConfirmation';
	element.appendChild(input);

	return element;
}

function createSubmitButton() {
	const button = document.createElement('button');
	button.setAttribute('type', 'submit');
	button.textContent = 'Submit';

	return button;
}
