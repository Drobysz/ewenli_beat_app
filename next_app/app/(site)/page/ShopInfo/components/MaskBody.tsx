import cn from "classnames";
import { MaskContainer } from '@/components/index';
import { ReactNode } from "react";

export const MaskBody = ({
	children,
	revealText
}: {
	children: ReactNode,
	revealText: string | React.ReactNode
})=> {
	return (
		<MaskContainer
			maskClassName={cn(
				"text-4xl leading-12 text-center",
				"max-[1160px]:text-3xl max-[1055px]:leading-10",
				"max-[960px]:text-2xl max-[960px]:leading-9",
				"max-[670px]:text-base max-[670px]:leading-7",
				"max-[580px]:text-sm max-[580px]:leading-6"
			)}
			revealText={revealText}
		>
			{children}
		</MaskContainer>
	)
}