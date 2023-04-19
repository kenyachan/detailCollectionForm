import { addValidation } from './modules/formValidation';
import * as elements from './modules/elements';

export const screenController = () => {
	const bodyElement = document.querySelector('body');

	const header = (() => {
		const headerElement = elements.createHeader();
		bodyElement.appendChild(headerElement);
	})();

	const main = (() => {
		const mainElement = elements.createMain();
		bodyElement.appendChild(mainElement);

		const pageElement = mainElement.querySelector('.page');

		const form = elements.createDetailCollectionForm();
		pageElement.appendChild(form);
		addValidation(form);
	})();

	const footer = (() => {
		const footerElement = elements.createFooter();
		bodyElement.appendChild(footerElement);
	})();
}
