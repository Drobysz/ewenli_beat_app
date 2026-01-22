'use client'

// Props
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react";

// Hooks
import { useContext } from "react";

// Context
import { SiteContext } from "../../context/site.context";

// Deps
import cn from 'classnames';

interface OpacityWrapperInterface extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode
}

export const OpacityWrapper: FC<OpacityWrapperInterface> = ({children, className, ...props})=> {
    const { currentModalWindow } = useContext(SiteContext)

    return (
        <div 
            {...props}
            className={cn(className, { 
            ['pointer-events-none blur-sm']: currentModalWindow != "none"
            })}
        >
            {children}
        </div>
    );
};