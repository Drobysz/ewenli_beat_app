// Props
import { FC } from "react";
import { GrayFeedProps } from "./GrayFeed.props";

import cn from 'classnames';

export const GrayFeed: FC<GrayFeedProps> = ({children, className}) => {
    return (
        <div 
            className={cn('w-full inset-0 top-[1800px] h-fit border-y-5 border-y-gray-700 bg-gray-600', className)}
        >
            {children}
        </div>
    );
};