import { climate_crisis } from "@/fonts/fonts";
import { GrayFeed } from "@/components/index"
import cn from 'classnames';

export const Title = ()=> {
	return (
		<GrayFeed>
			<h1 className={cn('flex justify-center items-center',
				'text-white text-5xl max-[390px]:text-3xl',
				'h-[104px] max-[390px]:h-[62px]', climate_crisis.className
			)}>
				Inventory
			</h1>
		</GrayFeed>
	)
}