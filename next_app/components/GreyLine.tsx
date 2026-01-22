import cn from 'classnames';

export const GreyLine = ()=> {
	return (
		<div className={cn(
			"w-full border-2 border-gray-50/70",
			"rounded-full mb-6 max-[580px]:border"
		)} />
	)
}