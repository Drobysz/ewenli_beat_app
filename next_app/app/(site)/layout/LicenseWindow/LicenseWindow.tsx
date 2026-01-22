"use client"

import {
    LicenseWindowBody,
    LicenseCross,
    IntroTitle,
    TermsBlock 
} from "./components/index";

export const LicenseWindow = ()=> {
    return (
        <LicenseWindowBody>
            <LicenseCross />
            <IntroTitle />
            <hr className="h-[2px] bg-zinc-600"/>
            <TermsBlock />
        </LicenseWindowBody>
    )
};