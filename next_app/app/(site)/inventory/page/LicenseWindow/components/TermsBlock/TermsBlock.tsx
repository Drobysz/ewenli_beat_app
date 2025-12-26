import { TermsZone, TermsTitle } from "./components/index";

export const TermsBlock = ()=> {
	return (
		<div className="pt-6 max-[500px]:pt-4 flex flex-col gap-10 w-fit justify-self-center max-[420px]:gap-7">
			<TermsTitle />
			<TermsZone />
		</div>
	)
}