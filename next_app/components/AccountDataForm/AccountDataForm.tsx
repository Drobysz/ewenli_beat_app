'use client'

// Props
import { FC } from "react";
import { AccountDataFormProps } from "./AccountDataForm.interface";

// Hooks
import { useState, useContext } from "react";

// Context
import { AppContext } from "@/app/context/app.context";

// Helpers
import { changeEmail, changeNickname, changePassword } from '@/helpers/accountDataRequest';

// Fonts
import { impact, avenir } from "@/fonts/fonts";

// Deps 
import cn from 'classnames';


export const AccountDataForm: FC<AccountDataFormProps> = ({formType}) => {
    // Environment variables
    const { token, name: nickname, email, setName, setEmail } = useContext(AppContext);
    // Current Form content
    const [ formContent, setFormContent ] = useState<string>('');
    // Response 
    const [ message, setMessage ] = useState<string>('');
    // Color os status
    const [ statusColor, setStatusColor ] = useState<'red' | 'green'| 'none'>('none');

    const handleFormRequest = async ()=> {
        if (formType === 'email'){
            const res = await changeEmail(token!, formContent);
            if (res.status === 200){
                setEmail(formContent);
                sessionStorage.setItem('email', formContent);

                const resText = await res.json();
                setMessage(resText.message);

                setStatusColor('green');
            } else {
                setMessage('Your credentials are not unique');
                setStatusColor('red');
            }
            
        } else if (formType === 'name'){
            const res = await changeNickname(token!, formContent);
            if (res.status === 200){
                setName(formContent);
                sessionStorage.setItem('name', formContent);

                const resText = await res.json();
                setMessage(resText.message);
                setStatusColor('green');
            } else {
                setMessage('Your credentials are not unique');
                setStatusColor('red');
            }
        } else if (formType === 'password'){
            const res = await changePassword(token!, formContent);
            if (res.status === 200){
                const resText = await res.json();
                setMessage(resText.message);
                setStatusColor('green');
            } else {
                setMessage('Your credentials are not unique');
                setStatusColor('red');
            }
        } 
    }

    return (
        <label 
            htmlFor={formType}
            className="flex flex-col gap-0.5"
        >
            {/* Form Title */}
            <div className="flex gap-2 items-center">
                <span className={cn("pl-2 text-lg text-white/50", avenir.className)}>
                    {formType}
                </span>
                {/* Error message */}
                <span className={cn("text-xs", impact.className, {
                    ['text-green-500/80']: statusColor === 'green',
                    ['text-red-proj/80']: statusColor === 'red'
                })}>
                    {message}
                </span>
            </div>

            {/* The Form itself */}
            <div className="grid w-full h-[40px] grid-cols-[1fr_auto] gap-5">
                <input 
                    id={formType}
                    type={formType}  
                    className={cn("rounded-xl border bg-zinc-900/40 px-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-white/50 focus:drop text-white/70 ring-2 focus:drop-shadow-[0px_0px_5px] focus:drop-shadow-white", {
                        ['border-zinc-700']: statusColor === 'none',
                        ['border-green-500 focus:drop-shadow-green-500 focus:ring-green-500']: statusColor === 'green',
                        ['border-red-proj focus:drop-shadow-red-proj focus:ring-red-proj']: statusColor === 'red'
                    })}
                    placeholder={
                        formType === 'name'
                        ? nickname!
                            : formType === 'email'
                            ? email!
                                : formType === 'password'
                                ? '*********'
                                    : ''
                    }
                    onChange={(e)=> {
                        setFormContent(e.target.value)
                        if (message !== '') {
                            setMessage('');
                            setStatusColor('none');
                        }
                    }}
                 />
                 {/* Confirm btn */}
                <button
                    className={cn("cursor-pointer bg-gray-50/40 border border-white/50 rounded-xl text-white px-3 py-1.5 w-full hover:bg-white/50 hover:text-black/50 hover:border-black/50 active:scale-96 active:bg-dark-blue active:text-white/50 transition-all duration-500", impact.className)}
                    onClick={handleFormRequest}
                >
                    confirm
                </button>
            </div>
           
        </label>
    );
};