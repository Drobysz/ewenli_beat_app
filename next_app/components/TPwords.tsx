'use client'

import { useEffect, useState } from "react"
import { Typewriter } from "./index"

export const TPwords = ({words, delay, className}: {words: string[], delay: number, className: string})=> {
	const [id, setId] = useState(0);

	useEffect(()=> {
		const ln = words.length;
		const interval = setInterval(()=> setId(prev=> (prev + 1) % ln), delay);
		console.log(id)
		return ()=> clearInterval(interval);
	}, []);

	return (
		<Typewriter 
			text={words[id]}
			delay={100}
			className={className}
		/>
	)
}