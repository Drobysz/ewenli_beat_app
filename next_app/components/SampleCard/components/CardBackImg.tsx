import cn from "classnames";

export const CardBackImg = ({ id }: { id: number })=> {
	return (
		<div
			className={cn(
				"absolute inset-0 z-0 transition-transform",
				"duration-300 group-hover:scale-110"
			)}
			style={{
				backgroundImage: `url(/sampleImages/rab${id}.png)`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
        />
	)
}