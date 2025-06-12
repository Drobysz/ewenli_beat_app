// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

// Components
import { GrayFeed } from "@/components/index";

// Fonts
import { climate_crisis } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

type HeaderProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Header: FC<HeaderProps> = ({className})=> {

    return (
        <div
            className={cn(className, "self-end")}
        >
            <GrayFeed>
                <h1 className={cn('flex justify-center items-center text-white text-5xl h-[104px]', climate_crisis.className)}>
                    Basket
                </h1>
            </GrayFeed>
        </div>
    );
}