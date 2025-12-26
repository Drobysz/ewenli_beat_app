'use client'

import { 
	motion,
	useTransform,
	useScroll
} from "framer-motion";
import { SampleCard } from "@/components/index"
import { useRef } from "react";
import cards from "./cards.json";
import cn from "classnames";

export const Carousel = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);

  return (
	<section
		ref={targetRef}
		className="relative h-[300vh] bg-neutral-900"
	>
		<div className={cn(
			"sticky top-0 flex h-screen",
			"items-center overflow-hidden"
		)}>
			<motion.div
				className="flex gap-4"
				style={{ x }}
			>
				{cards.map((card) => {
					return (
						<SampleCard
							card={card}
							key={card.id}
						/>
					)
				})}
			</motion.div>
		</div>
	</section>
  );
};
