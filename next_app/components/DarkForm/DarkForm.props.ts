// Props
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface DarkFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
   formType: 'name' | 'email' | 'password' | 'password_confirmation';
   error: string;
};