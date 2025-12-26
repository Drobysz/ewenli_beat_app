import { kiloy } from '@/fonts/fonts';
import cn from 'classnames';

export const SellerTitle = ()=> {
	return (
		<div className={cn(
			"h-[100vh] max-[550px]:h-[85vh]",
			"z-2 w-full absolute inset-0 flex",
			"flex-col justify-center items-center",
			"gap-10 mb-30"
		)}>
			<h2 className={cn(
				"text-black/30 text-9xl",
				"max-[660px]:text-8xl",
				"max-[590px]:text-6xl",
				kiloy.className
			)}>
				EWENLI
			</h2>
		</div>
	)
}