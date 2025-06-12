// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

// Fonts
import { bebas_neue } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

// Components
import { CategList } from "@/components/CategList";

type CategoriesProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Categories: FC<CategoriesProps> = ({...props})=> {

    return (
        <div
            {...props}
            className="flex flex-col items-center pt-[20%]"
        >
            <h2
                className={ cn('text-5xl text-white', bebas_neue.className) }
            >
                Categories
            </h2>

            <hr 
                className="w-[150px] h-1 bg-white mb-10"
            />

            <CategList />
        </div>
    );
}