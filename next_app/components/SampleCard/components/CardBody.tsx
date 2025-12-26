import { ReactNode } from "react";
import { motion } from "framer-motion";
import cn from "classnames";

export const CardBody = ({children}: {children: ReactNode})=> {
	return (
		<motion.div
			className={cn(
				"group relative h-[450px] w-[450px]",
				"overflow-hidden bg-neutral-200 cursor-pointer",
				"max-[750px]:h-[350px] max-[750px]:w-[350px]",
				"max-[550px]:h-[250px] max-[550px]:w-[250px]"
			)}
			whileHover={{boxShadow: '0px 0px 10px 6px white'}}
		>
			{children}
	  	</motion.div>
	)
}