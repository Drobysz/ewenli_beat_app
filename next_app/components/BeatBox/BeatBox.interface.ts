// Props
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export default interface BeatBoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    beat: Beat;
    beatImg: BeatUrl;
    beatFile?: BeatUrl;
    idx: number;
    mode: 'basket' | 'shop' | 'inventory' | 'workshop';
}