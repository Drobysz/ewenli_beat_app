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
            className="flex flex-col items-center pt-[20%] max-[510px]:pt-[5%]"
        >
            <h2 className={ cn('text-5xl text-white max-[952px]:text-3xl max-[590px]:text-xl', bebas_neue.className) }>
                Categories
            </h2>
            <hr className="w-[150px] max-[952px]:w-[120px] max-[590px]:w-[65px] h-1 max-[590px]:h-[2px] bg-white mb-10 max-[590px]:mb-5"/>
            <CategList />
        </div>
    );
}