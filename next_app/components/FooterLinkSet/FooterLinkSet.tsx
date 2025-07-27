'use client'

// JSON Data
import links from './medialinks.json';

// Props
import { FooterLinkSetProps, MediaCategory } from "./FooterLinkSetProps";

// Nav hooks
import { useRouter } from 'next/navigation';

// Components
import Link from 'next/link';
import Image from 'next/image';

// Fonts
import { fs163, tronecal } from '@/fonts/fonts';

// Dependencies
import cn from "classnames"


export const FooterLinkSet = ({className}: FooterLinkSetProps) => {
    const router = useRouter();

    return (
        <div className={className}>
            <Image
                className="max-[745px]:hidden hover:opacity-70 hover:scale-105 active:scale-97 transition-all duration-500" 
                src="/logo.png" 
                width={65} 
                height={65} 
                alt="logo"
                onClick={()=> router.push('/')}
            />

            {
                links.map( (category: MediaCategory) => (
                    <div
                     key={category.category}
                     className='flex flex-col gap-3 max-[510px]:gap-2'
                    >
                        <h2 className={cn(tronecal.className, `${category.color} text-lg max-[510px]:text-xs`)}>{category.name}</h2>
                        <ul className='grid grid-cols-1 text-white'>
                            {
                                category.links.map( link => (
                                    <Link href={link.link} key={link.mediaName}>
                                        <li className={cn(fs163.className, 'text-xl max-[510px]:text-sm py-1 text-white/90 w-fit hover:text-link-blue/70 hover:drop-shadow-text-link hover:scale-96 transition-all duration-500 cursor-pointer')}>
                                            { link.mediaName }
                                        </li>
                                    </Link>
                                ) )
                            }
                        </ul>
                    </div>
                ) )
            }
        </div>
    );
};