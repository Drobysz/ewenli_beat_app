import ContentSpaceProps from "./ContentSpace.props"

export const ContentSpace = ({ 
	spacing,
	isHovered,
	translation,
	children
}: ContentSpaceProps)=> {
	return (
		<div 
			className='flex items-center'
			style={{
				transform: isHovered
					? `translateX(-${translation}px)`
					: "translateX(0)",
				transition: "transform 0.3s ease",
				gap: spacing * 4
			}}
		>
			{children}
		</div>
	)
}