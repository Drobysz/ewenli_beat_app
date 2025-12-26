import cn from 'classnames';
import { GrayFeed } from '@/components/index';
import { cinzel, climate_crisis } from '@/fonts/fonts';

export const AchievmentsZone = ()=> {
	return (
		<GrayFeed className={cn(
			"py-3 mb-25",
			"flex justify-center"
		)}>
			<div className={cn(
				"w-[850px] flex justify-around",
				"max-[600px]:flex-col",
				"max-[600px]:gap-20"
			)}>
				{
					feedData.map( obj => (
						<div key={obj.k} className="flex flex-col gap-3 text-4xl text-white text-center">
							<h2 className={cn(climate_crisis.className)}>
								{obj.n}
							</h2>
							<h2 className={
								cn(cinzel.className,
								"flex flex-col items-center"
							)}>
								{obj.t.split(' ').map(w => <span key={w}>{w}</span>)}
							</h2>
						</div>
					) )
				}
			</div>
		</GrayFeed>
	)
}

const feedData = 
[ 
    {n: '100', t: 'created songs', k: 1},
    {n: '200', t: 'subscribers on-YouTube', k: 2}, 
    {n: '100', t: 'sold songs', k: 3}, 
];