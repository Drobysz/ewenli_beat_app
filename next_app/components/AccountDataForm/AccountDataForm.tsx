'use client'

// Props
import { AccountDataFormProps } from "./AccountDataForm.interface";

// Hooks
import { useState, useContext, ChangeEvent } from "react";

// Helpers
import { changeEmail, changeNickname, changePassword } from '@/helpers/accountDataRequest';

// Sesssion
import { updateSession } from "@/app/actions/sesssions";

// Fonts
import { impact, avenir } from "@/fonts/fonts";

// Deps 
import cn from 'classnames';

// Context
import { SiteContext } from "@/app/(site)/context/site.context";
import { FullScreenSpin } from "../FullScreenSpin";


export const AccountDataForm = ({ 
    formType
}: AccountDataFormProps) => {
    // Session Data
    const { sessionData, setSessionData } = useContext(SiteContext);
    // Current Form content
    const [ formContent, setFormContent ] = useState('');
    // Response 
    const [ message, setMessage ] = useState('');
    // Color of status
    const [ statusColor, setStatusColor ] = useState<'red' | 'green'| 'none'>('none');
    const [isPending, setPending] = useState(false);
    
    if (sessionData === undefined) {
        return null;
    }

    // Placeholder content lib
    const placeholderLib = {
        name:     sessionData.name!,
        email:    sessionData.email!,
        password: '*********'
    }

    const handleResponse = async (
        status: number, 
        message: string, 
    )=> {
        if (status === 200){
            const newSessionData = {
                ...sessionData!,
                [formType]: formContent
            };

            if (sessionData !== undefined) {
                console.log(newSessionData)
                setSessionData(newSessionData);
                await updateSession(newSessionData);
            }

            setMessage(message);
            setStatusColor('green');
        } else {
            setMessage('Your credentials are not unique');
            setStatusColor('red');
        }
    };

    const handleFormRequest = async ()=> {
        setPending(true);

        switch (formType) {
            case "email":
                const resEmail = await changeEmail(sessionData.token!, formContent);
                const msgEmail = await resEmail.json();
                handleResponse(resEmail.status, msgEmail.message);
                break;
        
            case "name":
                const resName = await changeNickname(sessionData.token!, formContent);
                const msgName = await resName.json();
                console.warn(resName)
                console.warn(msgName)
                handleResponse(resName.status, msgName.message);
                break;
                
            case "password":
                const resPswrd = await changePassword(sessionData.token!, formContent);
                const msgPswrd = await resPswrd.json();
                handleResponse(resPswrd.status, msgPswrd.message);
                break;
        }

        setPending(false);
    }

    const handleInputValue = (e: ChangeEvent<HTMLInputElement>)=> {
        setFormContent(e.target.value)
        if (message !== '') {
            setMessage('');
            setStatusColor('none');
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
            <form className="grid w-full h-[40px] grid-cols-[1fr_auto] gap-5">
                <input 
                    id={formType}
                    type={formType}  
                    className={cn("rounded-xl border bg-zinc-900/40 px-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-white/50 focus:drop text-white/70 ring-2 focus:drop-shadow-[0px_0px_5px] focus:drop-shadow-white", {
                        ['border-zinc-700']: statusColor === 'none',
                        ['border-green-500 focus:drop-shadow-green-500 focus:ring-green-500']: statusColor === 'green',
                        ['border-red-proj focus:drop-shadow-red-proj focus:ring-red-proj']: statusColor === 'red'
                    })}
                    placeholder={placeholderLib[formType]}
                    onChange={handleInputValue}
                 />
                 {/* Confirm btn */}
                <button
                    className={cn("cursor-pointer bg-gray-50/40 border border-white/50 rounded-xl text-white px-3 py-1.5 w-full hover:bg-white/50 hover:text-black/50 hover:border-black/50 active:scale-96 active:bg-dark-blue active:text-white/50 transition-all duration-500", impact.className)}
                    type="button"
                    onClick={handleFormRequest}
                >
                    {isPending ? <FullScreenSpin size="small"/> : "confirm"}
                </button>
            </form>
           
        </label>
    );
};