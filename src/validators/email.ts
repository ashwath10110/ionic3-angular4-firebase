export class EmailValidator {

	static isValid(control: any) {
		const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);

		if (re) {
			return null;
		}

		return {
			"invalidEmail": true
		};

	}
}