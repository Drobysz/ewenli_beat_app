// Props
import { DetailedHTMLProps, HTMLAttributes } from "react";

// Components
import { NavBar, AccountElement } from '@/components/index';
import Image from "next/image";
import Link from "next/link";

// Dependencies
import cn from "classnames";

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export async function Header ({className}: HeaderProps) {
  return (
    <header className={cn(className, "flex sticky justify-between items-center h-[75px] w-[100%] border-b-1 border-b-[#2c2c2c] px-10 backdrop-blur-2xl")}>
      <Link href='/'>
        <Image 
            className="hover:opacity-70 hover:scale-105 active:scale-97 transition-all duration-500"
            src="/logo.png" 
            width={65} 
            height={65} 
            alt="logo"
        />
      </Link>
      <NavBar />
      <AccountElement />
    </header>
  );
}
