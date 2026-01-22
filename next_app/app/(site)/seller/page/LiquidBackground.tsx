import cn from 'classnames';
import { R3FShader } from '@/components/index';

export const LiquidBackground = ()=> {
	return (
		<div className={cn(
			"absolute inset-0 z-1 overflow-hidden",
			"w-screen h-[120vh] max-[550px]:h-[85vh]"
		)}>
			<div
				style={{
					position: 'absolute',
					inset: 0,
					left: 0,
					pointerEvents: 'none',
					background: 'linear-gradient( to bottom, transparent, #0A0A0A 85%)',
					zIndex: 2,  
				}}
			/>
			<R3FShader />
		</div>
	)
}