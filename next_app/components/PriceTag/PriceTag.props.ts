import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PriceTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    priceState: boolean;
    setPriceState: (priceState: boolean)=> void;
}