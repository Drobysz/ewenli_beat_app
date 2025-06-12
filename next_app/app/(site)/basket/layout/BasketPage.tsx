// Props
import { Beat } from "@/interfaces/Products.interface";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";

// Components
import { BeatBox } from "@/components";


interface BasketProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
    basketBeats: Beat[];
    beatImgs: BeatUrl[];
};

export const BasketPage: FC<BasketProps> = ({basketBeats, beatImgs})=> {
    return (
        <div className="h-[78vh] overflow-y-scroll">
            <ul 
                className="overflow-x-hidden mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))] justify-center content-start gap-x-6 gap-y-6 pt-10"
            >
                {
                    basketBeats.length > 0 
                    ?
                        basketBeats.map( (beat, idx)=> (
                            <BeatBox 
                                key={idx} 
                                beat={beat} 
                                beatImg={beatImgs.find( bimg => bimg.local_name.includes(beat.name + '.png') )!}  
                                idx={idx} 
                                mode="basket" 
                            />
                        ))
                    :
                        <span className="text-white/30 text-5xl">
                            Your basket is empty
                        </span>
                }
            </ul>
        </div>
    );
};