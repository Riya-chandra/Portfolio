export interface ContactFormData {
	name: string;
	email: string;
	message: string;
}

export interface EmailResponse {
	success: boolean;
	message?: string;
	error?: string;
}
