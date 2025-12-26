import { inter } from "@/fonts/fonts";
import { TitleBodyProps } from "./TitleBody.props";
import cn from "classnames";

export const TitleBody = ({ children, size }: TitleBodyProps)=> {
	return (
		<h3 className={cn(
			inter.className,
			'text-white',
			'whitespace-nowrap transition-all',
			{
				['text-[1rem]']: size == 'large',
				['text-[0.85rem]']: size == 'middle',
				['text-[0.45rem]']: size == 'small'
			}
		)}>
			{children}
		</h3>
	)
}