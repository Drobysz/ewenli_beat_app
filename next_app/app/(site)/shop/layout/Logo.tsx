import { DetailedHTMLProps, HTMLAttributes } from "react";
import { bagel_fat_one } from "@/fonts/fonts";
import cn from 'classnames';

type LogoProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Logo = ({...props}: LogoProps)=> {

    return (
        <div
            {...props}
            className={cn(
                "flex justify-center items-center",
                "border-r-1 border-b-1 border-dashed",
                "box-border border-gray-700"
            )}
        >
            <h1 className={cn(
                'text-4xl text-center text-white',
                'max-[952px]:text-3xl max-[620px]:text-xl',
                bagel_fat_one.className
            )}>
                Boutique
            </h1>
        </div>
    );
}