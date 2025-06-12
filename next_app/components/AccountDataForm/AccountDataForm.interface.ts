// Props
import { DetailedHTMLProps, FormHTMLAttributes } from "react";

export interface AccountDataFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    formType: 'email' | 'name' | 'password';
};