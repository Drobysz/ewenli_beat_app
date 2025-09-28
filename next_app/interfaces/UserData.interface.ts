import { JWTPayload } from "jose";

export type roles = 'user' | 'admin';

export interface UserLog{
	user: {
		id: number,
		name: string,
		email: string,
		email_verified_at: null,
		created_at: null,
		updated_at: null,
		role: roles
	},
	token: string;
	message: string;
}

export interface UserReg{
	user: {
		id: number,
		name: string,
		email: string,
		role: roles
	},
	token: string;
	message: string;
}

export interface UserSession extends JWTPayload {
	token?: string;
	name?: string;
	email?: string;
	role?: roles;
}