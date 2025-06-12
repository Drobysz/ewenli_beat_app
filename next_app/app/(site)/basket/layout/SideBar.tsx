// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Beat } from "@/interfaces/Products.interface";

// Fonst
import { bebas_neue, inter, handjet } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

interface SideBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
    basketBeats: Beat[]
};


export const SideBar: FC<SideBarProps> = ({className, basketBeats})=> {
    const totalPrice = basketBeats.reduce( (sum, obj)=> sum + obj.price, 0);

    return (
        <aside
            className={cn(className, "flex justify-center items-center py-4 px-5")}
        >
            <div className="h-full w-full bg-gray-900 rounded-3xl">
                <h2 className={cn('text-[#4F4E4E] text-5xl text-center pt-2.5 max-[600px]:text-4xl', bebas_neue.className)}>
                    Price
                </h2>

                <hr className="h-1.5 bg-[#464A55] mb-8"/>
                {
                    basketBeats.length > 0 &&
                    (
                        <div className="flex flex-col justify-center items-center gap-4">
                            <div className="h-[200px] overflow-y-scroll">
                                <ul className="flex flex-col gap-4 w-[150px] max-[520px]:px-2">
                                    {
                                        basketBeats.map( beat=> (
                                            <li 
                                                key={beat.id}
                                                className="flex justify-between text-3xl max-[600px]:text-2xl"
                                            >
                                                <span className={cn('text-[#4F4E4E]', inter.className)}>
                                                    {beat.name}
                                                </span>

                                                <span className={cn('text-dark-gold', handjet.className)}>
                                                    {beat.price}$
                                                </span>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>
                            <hr className="h-[3px] bg-[#464A55] w-[200px] max-[550px]:w-full"/>
                            <div className="text-3xl flex gap-9 max-[600px]:text-2xl">
                                <span className={cn('text-[#4F4E4E]', inter.className)}>Total:</span>
                                <span className={cn('text-dark-gold', handjet.className)}>
                                    {totalPrice}$
                                </span>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </aside>
    );
}