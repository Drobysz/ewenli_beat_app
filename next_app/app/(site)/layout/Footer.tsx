// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Dependencies
import cn from "classnames"

// Components
import { FooterLinkSet } from '@/components/index';

type FooterProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Footer: FC<FooterProps> = ({className})=> {
  return (
    <footer className={ cn( className, "h-fit w-[100%] flex justify-center items-start gap-[77px] py-5 pr-10 border-t-1 border-t-[#2c2c2c] max-[745px]:flex-col max-[745px]:items-center max-[745px]:gap-15" )}>        
        <FooterLinkSet />
    </footer>
  );
}