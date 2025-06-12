export interface UserLog{
	user: {
		id: number,
		name: string,
		email: string,
		email_verified_at: null,
		created_at: null,
		updated_at: null
	},
	token: string;
	message: string;
}

export interface UserReg{
	user: {
		id: number,
		name: string,
		email: string,
	},
	token: string;
	message: string;
}