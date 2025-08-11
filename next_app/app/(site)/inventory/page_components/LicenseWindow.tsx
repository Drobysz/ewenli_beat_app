"use client"

import Image from "next/image";
import { SiteContext } from "@/app/(site)/context/site.context";
import { useContext } from "react";
import cn from "classnames";
import { avenir } from "@/fonts/fonts";

export const LicenseWindow = ()=> {
    const { curentBeatInLicense, isLicenseWindowOpen, setLicenseWindow } = useContext(SiteContext);

    return (
        <div className={cn("top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 h-fit w-[80%] backdrop-blur-lg bg-gray-300/60 py-11 px-10 rounded-3xl border-1 border-zinc-700 px-5", {
            ['hidden']: isLicenseWindowOpen == false,
            ['fixed']:  isLicenseWindowOpen
        })}>
            {/* Cross image */}
            <Image 
                className="absolute right-3 top-3 cursor-pointer hover:scale-105 transition-all duration-500"
                src='/cross.svg'
                alt="cross"
                width={32}
                height={32}
                onClick={()=> setLicenseWindow(false)}
            />

            <div className="mb-8 max-[500px]:mb-4 flex flex-col items-center gap-8 max-[500px]:gap-5">
                <Image 
                    src='/mascot.png'
                    alt="title_logo"
                    width={144}
                    height={144}
                />

                <div className="flex flex-col gap-4 max-[500px]:gap-2 text-white">
                    <h3 className={cn("text-4xl text-center max-[705px]:text-3xl max-[600px]:text-2xl max-[500px]:text-xl max-[435px]:text-lg max-[405px]:text-base max-[370px]:text-sm max-[336px]:text-xs", avenir.className)}>
                        Thank for buying <span className="text-[#4152DF]">MP3</span> license
                    </h3>
                    <p className="text-lg text-center max-[705px]:text-base max-[600px]:text-xs max-[500px]:text-[0.625rem] max-[435px]:text-[0.5rem] max-[405px]:text-[0.35rem]">
                        {curentBeatInLicense.category} &quot;{curentBeatInLicense.name}&quot;
                    </p>
                </div>
            </div>
            <hr className="h-[2px] bg-zinc-600"/>
            <div className="pt-6 max-[500px]:pt-4 flex flex-col gap-10 w-fit justify-self-center max-[420px]:gap-7">
                <div className="flex flex-col gap-2 max-[420px]:gap-0 max-[420px]:text-center">
                    <h4 className="text-2xl max-[420px]:text-xl text-white">
                        Usage Terms
                    </h4>
                    <p className="text-lg max-[420px]:text-base text-[#4152DF]">
                        MP3 &#40;$17&#41;
                    </p>
                </div>
                <div className="grid grid-cols-3 max-[970px]:grid-cols-2 max-[620px]:grid-cols-1 max-[620px]:self-center w-fit  gap-x-[5%] gap-y-8 max-[620px]:overflow-y-scroll max-[620px]:h-[200px]">
                    {usageTerms.map( (term, idx)=> (
                        <div 
                            key={`${idx}-term`}
                            className="flex items-start gap-4"
                        >
                            <Image 
                                className="opacity-50 max-[970px]:w-5 max-[970px]:h-5"
                                src={term.icon}
                                alt="term_icon"
                                width={25}
                                height={25}
                            />
                            <h4 className="text-zinc-600 font-bold text-xs">{term.title}</h4>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    )
};

const usageTerms = [
    {
        icon: "/license_icons/RECORDING.svg",
        title: "USED FOR MUSIC RECORDING"
    },
    {
        icon: "/license_icons/COPIES.svg",
        title: "DISTRIBUTE UP TO 2,000 COPIES"
    },
    {
        icon: "/license_icons/STREAMS.svg",
        title: "500,000 ONLINE AUDIO STREAMS"
    },
    {
        icon: "/license_icons/VIDEO.svg",
        title: "1 MUSIC VIDEO"
    },
    {
        icon: "/license_icons/LIVE.svg",
        title: "FOR PROFIT LIVE PERFORMANCES"
    },
    {
        icon: "/license_icons/RADIO.svg",
        title: "RADIO BROADCASTING RIGHTS (2 STATIONS)"
    },
];