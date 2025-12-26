import cn from 'classnames';

export const LiquidBorderFrame = ()=> {
	return (
		<div className={cn(
			"h-[100vh] z-20 w-full bg-transparent",
			"flex justify-center items-center mb-18",
			"max-[550px]:h-[85vh]",
			"max-[550px]:mb-4"
		)}/>
	)
}