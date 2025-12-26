import cn from "classnames";

export const CardTitle = ({ title }: {title: string})=> {
	return (
		<div className={cn(
			"absolute inset-0 z-10",
			"grid place-content-center"
		)}>
			<p className={cn(
				"bg-gradient-to-br text-center w-[300px]",
				"max-[550px]:w-[200px] from-white/20 to-white/0",
				"p-8 max-[550px]:p-6 text-3xl max-[550px]:text-2xl",
				"font-black uppercase text-white backdrop-blur-lg"
			)}>
				{title}
			</p>
        </div>
	)
}